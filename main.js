const SPACE = 'k9mhf5ofb802';
const TOKEN = '';

const BASE = 'https://cdn.contentful.com/spaces'

const getUrl = (id) => `${BASE}/${SPACE}/entries/${id}?access_token=${TOKEN}`;

const getAssetUrl = (id) => `${BASE}/${SPACE}/assets/${id}?access_token=${TOKEN}`;

const getEntry = (url) => fetch(url).then(res => res.json()).catch(console.log);

const getAllEntries = (ids) => Promise.all(ids.map(id => getEntry(getUrl(id))))

const extractIds = (datastruct) => datastruct.map(el => el.sys.id);

const unifyAllData = (arr, key) => Promise.all(arr.map((el) => unifyData(el, key)));

const getValueFromFName = (arr, fname) => {
  const val = arr.find(val => val.fieldName === fname);
  if (val === undefined) {
    console.warn(`${fname} not found`);
  }
  return val;
}

const extractType = async (e) => {
  const arr = [];
  for (let key in e) {
    const val = e[key];
    const type = typeof val;
    if (Array.isArray(val)) {
      const ids = extractIds(val);
      const data = await getAllEntries(ids);
      const unifiedData = await unifyAllData(data, key);
      arr.push(unifiedData);
    } else if (type === 'string') {
      arr.push({
        type: 'string',
        fieldName: key,
        value: val,
      });
    } else if (type === 'boolean') {
      arr.push({
        type: 'boolean',
        fieldName: key,
        value: val,
      });
    } else if (type === 'object' && val.hasOwnProperty('nodeType')) {
      arr.push({
        type: 'richtext',
        fieldName: key,
        value: val.content,
      });
    } else if (type === 'object' && val.hasOwnProperty('lon') && val.hasOwnProperty('lat')) {
      arr.push({
        type: 'coordinates',
        fieldName: key,
        value: { ...val },
      });
    } else if (type === 'object' && val.hasOwnProperty('sys') && val.sys.linkType === "Asset") {
      const id = val.sys.id;
      const data = await getEntry(getAssetUrl(id));
      arr.push({
        type: 'Object',
        fieldName: key,
        id,
        meta: {
          type: 'Asset',
          id: 'Asset',
          context: data,
        },
        fields: data.fields,
      })
    } else {
      console.warn('⚠️ something not implemented yet');
    }

  }
  return arr;
}



async function unifyData(e, fieldName = '') {
  try {
    const a = e.sys.id;
  } catch (error) {
    debugger;
  }
  try {
    const a = e.sys.contentType.sys;
  } catch (error) {
    debugger;
  }
  return {
    type: 'Object',
    fieldName,
    id: e.sys.id,
    meta: {
      ...e.sys.contentType.sys,
      context: e,
    },
    fields: await extractType(e.fields)
  }
}

const getPage = async (entrypoint) => {
  const url = getUrl(entrypoint);
  const data = await getEntry(url);
  return unifyData(data, 'landingpage');
}

const renderRichText = (rt) => rt.map(r => {
  if (r.nodeType === 'text') {
    return r.value.split('\n').join('<br />');
  }
  if (r.nodeType === 'paragraph') {
    return `<p>${renderRichText(r.content)}</p>`;
  }
  if (r.nodeType === 'heading-3') {
    return `<h3>${renderRichText(r.content)}</h3>`;
  }
  console.log(r);
  console.warn('⚠️ something not implemented yet');
  return '';
}).join('')

const componentMapping = {
  'stage': stageConnector,
  'landingpage': landingpageConnector,
}

function stageConnector({ fields }) {
  return `
  <video-stage
    subheadline='${getValueFromFName(fields, 'subheadline').value}'
    logo='${getValueFromFName(fields, 'logo').value}'
    preheadline='${getValueFromFName(fields, 'preHeadline').value}'
    headline='${getValueFromFName(fields, 'headline').value}'
    video-url='${getValueFromFName(fields, 'video').fields.file.url}'
  ></video-stage>
  `
}

function landingpageConnector({ fields }) {
  const data = fields[0];
  return data.map(el => {
    const t = el.meta.id;
    if (t === 'stage') {
      return `
        <section id="video" class="snap-layout__section white">
          ${renderElements(el)}
        </section>
      `
    }
    if (t === 'intro') {
      const { fields } = el;
      return `
        <section class="snap-layout__section white twelve-columns-grid">
          <glyph-headline dark>${getValueFromFName(fields, 'sectionHeadline').value}</glyph-headline>
          <div class="offset-second-column">
            <event-date date='${getValueFromFName(fields, 'date').value.split('-').join(' / ')}' location='Virtual Identity AG - Munich'></event-date>
            <simple-text>${renderRichText(getValueFromFName(fields, 'text').value)}</simple-text>
            ${getValueFromFName(fields, 'showRegistrationLink').value ? `<simple-button link="#registration">Registration</simple-button>` : ''}
          </div>
        </section>
      `
    }
    return `<div>${renderElements(el)}</div>`;
  }).join('');
}


function renderElements(data) {
  if (data.type === 'Object' && data.meta.id === 'Asset') {
    const file = data.fields.file;
    if (file.contentType === "video/mp4") {
      return `<video muted class="video-stage__video">
      <source src="${file.url}" type="video/mp4">
      Your browser does not support the video tag.
  </video>`
    }
    return `<img src="${file.url}" />`;
  }
  if (data.hasOwnProperty('type') && data.type === 'Object') {
    if (componentMapping.hasOwnProperty(data.meta.id)) {
      return componentMapping[data.meta.id](data);
    }
    return `<div class="${data.meta.id}">
      ${data.fields.map(f => {
      if (Array.isArray(f)) {
        return f.map(ff => renderElements(ff)).join('')
      }
      return renderElements(f)
    }).join('')}
    </div>`
  }
  if (data.type === 'string') {
    return `<p>${data.value}</p>`
  }
  if (data.type === 'boolean') {
    return `<p>boolean: ${data.value ? 'true' : 'false'}</p>`
  }
  if (data.type === 'coordinates') {
    return `<p>coordinates: ${data.value.lon} / ${data.value.lat}</p>`
  }
  if (data.type === 'richtext') {
    return renderRichText(data.value);
  }
  console.log(data.type);
  console.log(data.value);
  return `<p>⚠️ not ready yet</p>`
}

(async () => {
  const htmlElement = document.getElementById('root');
  const entryPoint = '7CNhvCRqMnY8D5NhxwEdXM';
  const page = await getPage(entryPoint);
  const html = renderElements(page);
  htmlElement.innerHTML = html;
})()

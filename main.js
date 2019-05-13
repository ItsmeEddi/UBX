const SPACE = 'k9mhf5ofb802';
const TOKEN = '';

const BASE = 'https://cdn.contentful.com/spaces'

const getUrl = (id) => `${BASE}/${SPACE}/entries/${id}?access_token=${TOKEN}`;

const getAssetUrl = (id) => `${BASE}/${SPACE}/assets/${id}?access_token=${TOKEN}`;

const getEntry = (url) => fetch(url).then(res => res.json()).catch(console.log);

const getAllEntries = (ids) => Promise.all(ids.map(id => getEntry(getUrl(id))))

const extractIds = (datastruct) => datastruct.map(el => el.sys.id);

const unifyAllData = (arr, key) => Promise.all(arr.map((el) => unifyData(el, key)));

const camelCaseToDash = (str) => str.replace(/([a-zX])(?=[A-Z])/g, '$1-').toLowerCase();

const getValueFromFName = (arr, fname) => {
  const val = arr.find(val => val.fieldName === fname);
  if (val === undefined) {
    console.warn(`${fname} not found`);
  }
  return val;
}

const getValueFromFieldName = (arr, fname) => getValueFromFName(arr, fname).value;
const getFileUrlFromFieldName = (arr, fname) => getValueFromFName(arr, fname).fields.file.url;

const extractType = async (e) => {
  const arr = [];
  for (let key in e) {
    const val = e[key];
    const type = typeof val;
    if (Array.isArray(val)) {
      const ids = extractIds(val);
      const data = await getAllEntries(ids);
      const unifiedData = await unifyAllData(data, key);
      arr.push({
        type: 'Object',
        fieldName: key,
        id: -1,
        meta: {
          type: key,
          id: key,
          context: val,
        },
        fields: unifiedData,
      });
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
  'intro': introConnector,
  'registration': registrationConnector,
  'speakersSection': speakerSectionConnector,
  'location': locationConnector,
  'pastEvents': pastEventsConnector,
}

function pastEventsConnector({ fields }) {
  const events = getValueFromFName(fields, 'eventList').fields;
  return `
  <glyph-headline dark>${getValueFromFName(fields, 'title').value}</glyph-headline>
  <div class="two-columns-grid">
    ${events.map(item => {
    const f = item.fields;
    return `<past-events
       image='${getFileUrlFromFieldName(f, 'image')}'
       logo='${getFileUrlFromFieldName(f, 'logo')}'
       link='${getValueFromFieldName(f, 'link')}'
       link-text='${getValueFromFieldName(f, 'linkTitle')}'
      >${renderRichText(getValueFromFieldName(f, 'text'))}</past-events>`
  }).join('')}
  </div>
  `
}

function locationConnector({ fields }) {
  return `
  <glyph-headline light>${getValueFromFieldName(fields, 'title')}</glyph-headline>
  <simple-text class="offset-second-column">${renderRichText(getValueFromFieldName(fields, 'text'))}</simple-text>
  <google-maps></google-maps>
  `
}

function speakerSectionConnector({ fields }) {
  const speakers = getValueFromFName(fields, 'speakerList').fields;
  return `
  <glyph-headline light>${getValueFromFieldName(fields, 'title')}</glyph-headline>
  <div class="two-columns-grid">
    ${speakers.map((data) => {
    const f = data.fields;
    return `<speaker-box
      first-name='${getValueFromFieldName(f, 'firstName')}'
      last-name='${getValueFromFieldName(f, 'lastName')}'
      image='${getFileUrlFromFieldName(f, 'image')}'
      job-info='${getValueFromFieldName(f, 'jobTitle')}'
    >${renderRichText(getValueFromFieldName(f, 'description'))}</speaker-box>`;
  }).join('')}
  </div>
  `
}

function registrationConnector({ fields }) {
  return `
    <glyph-headline light>${getValueFromFieldName(fields, 'title')}</glyph-headline>
    <div class="registration-container">
      <simple-text>${renderRichText(getValueFromFieldName(fields, 'text'))}</simple-text>
      ${getValueFromFieldName(fields, 'form') ? `<registration-form></registration-form>` : ''}
    </div>
  `
}

function introConnector({ fields }) {
  return `
    <glyph-headline dark>${getValueFromFieldName(fields, 'sectionHeadline')}</glyph-headline>
    <div class="offset-second-column">
      <event-date date='${getValueFromFieldName(fields, 'date').split('-').join(' / ')}' location='Virtual Identity AG - Munich'></event-date>
      <simple-text>${renderRichText(getValueFromFieldName(fields, 'text'))}</simple-text>
      ${getValueFromFieldName(fields, 'showRegistrationLink') ? `<simple-button link="#registration">Registration</simple-button>` : ''}
    </div>
  `
}

function stageConnector({ fields }) {
  return `
  <video-stage
    subheadline='${getValueFromFieldName(fields, 'subheadline')}'
    logo='${getValueFromFieldName(fields, 'logo')}'
    preheadline='${getValueFromFieldName(fields, 'preHeadline')}'
    headline='${getValueFromFieldName(fields, 'headline')}'
    video-url='${getFileUrlFromFieldName(fields, 'video')}'
  ></video-stage>
  `
}

function landingpageConnector({ fields }) {
  const data = getValueFromFName(fields, 'sectionsItems').fields;
  const str = data.map(el => {
    const t = el.meta.id;
    if (t === 'stage') {
      return `
        <section id="video" class="snap-layout__section white">
          ${renderElements(el)}
        </section>
      `
    }
    if (t === 'intro') {
      return `
        <section class="snap-layout__section white twelve-columns-grid">
          ${renderElements(el)}
        </section>
      `
    }
    if (t === 'registration') {
      return `
        <section id="registration" class="snap-layout__section dark-blue twelve-columns-grid">
        ${renderElements(el)}
        </section>
      `
    }
    if (t === 'speakersSection') {
      return `
      <section id="speaker" class="snap-layout__section dark-blue">
      ${renderElements(el)}
      </section>
      <section id="schedule"class="snap-layout__section white">
        <glyph-headline dark>Schedule</glyph-headline>
        <schedule-placeholder></schedule-placeholder>
      </section>
      `
    }
    if (t === 'location') {
      return `
      <section id="location" class="snap-layout__section dark-blue twelve-columns-grid">
        ${renderElements(el)}
      </section>
      `
    }
    if (t === 'pastEvents') {
      return `
      <section id="events" class="snap-layout__section white">
      ${renderElements(el)}
      </section>
      `
    }
    console.log(t);
    return `<div>${renderElements(el)}</div>`;
  }).join('');

  return `<div class="snap-layout__container">${str}</div>`
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
    return `<img src = "${file.url}" />`;
  }
  if (data.hasOwnProperty('type') && data.type === 'Object') {
    if (componentMapping.hasOwnProperty(data.meta.id)) {
      return componentMapping[data.meta.id](data);
    }
    return `<div class="${data.meta.id}" >
  ${
      data.fields.map(f => {
        if (Array.isArray(f)) {
          return f.map(ff => renderElements(ff)).join('')
        }
        return renderElements(f)
      }).join('')
      }
    </div> `
  }
  if (data.type === 'string') {
    return `<p> ${data.value}</p> `
  }
  if (data.type === 'boolean') {
    return `<p> boolean: ${data.value ? 'true' : 'false'}</p> `
  }
  if (data.type === 'coordinates') {
    return `<p> coordinates: ${data.value.lon} / ${data.value.lat}</p> `
  }
  if (data.type === 'richtext') {
    return renderRichText(data.value);
  }
  console.log(data.type);
  console.log(data.value);
  return `<p>⚠️ not ready yet</p> `
}

(async () => {
  const htmlElement = document.getElementById('root');
  const entryPoint = '7CNhvCRqMnY8D5NhxwEdXM';
  const page = await getPage(entryPoint);
  const html = renderElements(page);
  htmlElement.innerHTML = html;
})()

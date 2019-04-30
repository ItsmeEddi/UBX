const getRandomInt = (t, e)=>{
    return Math.floor(Math.random() * (e - t + 1)) + t;
}

export default getRandomInt;
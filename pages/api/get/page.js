const axios = require('axios').default;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const page = async (req, res) => {
    // Open Chrome DevTools to step through the debugger!
    // debugger;
    const qry = req.query;
    let reqUrl = 'http://127.0.0.1:1337/api/pages';
    if(Object.keys(qry).length > 0){
        let qryparams = '?';
        Object.entries(qry).forEach((x)=>{
            qryparams += `filters[${x[0]}][$eq]=${x[1]}`;
        })
        reqUrl += qryparams;
    }
    let config = {
        method: 'get',
        url: reqUrl,
        headers: { 
          'Authorization': 'Bearer f280a0e2a46d190d446f504df596081fb3089efa45ca85fb46d7855c0af3cb100e9f1b57ee2b2705aed6aa09415c3630c125f382c4fff7610f5d34b7d8d4eb3544a4ab8a39f5915363b9e365c8cb45e278aee0f8d05b380001fc7ecd9a4611864650e5ff275fd11a0510689f38b38893bb3f3454c10ab5f4ad03e416a90de8da'
        }
      };
      
    let resp = {};
   // res.status(200).json(reqUrl);
    try{
       resp = await axios.request(config);
       console.log(resp.data);
       res.status(200).json(resp.data);
    }catch(ex){
        res.status(503).json(ex);
    }
    
  };
  
export default page;
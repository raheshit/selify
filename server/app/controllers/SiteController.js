const controller = require('./controller');

class SiteController extends  controller{


        index(req,res){
            res.json('Site Controller');
        }




}

module.exports=new  SiteController();

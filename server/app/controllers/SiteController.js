const controller = require('app/controllers/controller');

class SiteController extends  controller{


        index(req,res){

            res.json('Site Controller');
        }




}

module.exports=new  SiteController();

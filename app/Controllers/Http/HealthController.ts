'use strict';
import { Http } from "@adonisjs";

class HealthController {
    async index ({ request, response, view } : {request: Http.Request, response: Http.Response, view : any}) {
        return response.status(200).json({"status": "New"});
      }    
}

export = HealthController;

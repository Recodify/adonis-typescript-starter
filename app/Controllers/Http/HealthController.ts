'use strict';
import { Http } from "@adonisjs";

class HealthController {
    async index ({ request, response } : {request: Http.Request, response: Http.Response}) : Promise<void> {
        response.status(200).json({status: "New"});
    }
}

export = HealthController;

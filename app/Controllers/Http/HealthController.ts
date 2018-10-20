'use strict';
import { Http } from "@adonisjs";

class HealthController {
    public index(request : Http.Request, response: Http.Response) {
        response.status(200).json({status: "New"});
    }
}

export = HealthController;
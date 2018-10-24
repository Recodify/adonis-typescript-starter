'use strict';

import { Http, View } from "@adonisjs";

class PropertyController {
    async index ({ request, response, view } : {request: Http.Request, response: Http.Response, view: View})
        : Promise<string> {

        const characters = {
        'Arya Stark'         : 'Maisie Williams',
        'Daenerys Targaryen' : 'Emilia Clarke',
        'Jon Snow'           : 'Kit Harington',
        'Melisandre'         : 'Carice van Houten',
        'Khal Drogo'         : 'Jason Momoa',
        'Tyrion Lannister'   : 'Peter Dinklage',
        'Ramsay Bolton'      : 'Iwan Rheon',
        'Petyr Baelish'      : 'Aidan Gillen',
        'Brienne of Tarth'   : 'Gwendoline Christie',
        'Lord Varys'         : 'Conleth Hill'
        };

        return view.render('welcome', { characters });
      }
}

export = PropertyController;

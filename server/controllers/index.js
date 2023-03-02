/**
 * File name:    index.js **  Controllers
 * Student name: Krishna Ramlakhan
 * Student ID:   818583171 
 * Date:         March 1st, 2023 
 * App Name: Book List
 */
export function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
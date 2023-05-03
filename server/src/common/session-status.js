module.exports = {
    checkSession: (req, res, next) => {
        if(req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login')
        }
    },
    checkNoSession: (req, res, next) => {
        if(!req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/')
        }
    }
}
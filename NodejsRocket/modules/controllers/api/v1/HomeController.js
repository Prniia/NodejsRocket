module.exports = new class HomeController {
    index(req, res){
        res.status(404).json('Welcome to Api');
    }

    version(req, res){
        res.json('version 1')
    }
}

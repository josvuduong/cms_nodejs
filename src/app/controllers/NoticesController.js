class NoticesController {

    list(req, res) {
        res.render('notices/list')
    }

    add(req, res) {
        res.json({
            data: "notice add"
        });
    }

    edit(req, res) {
        res.json({
            data: req.params.id
        });
    }

    delete(req, res) {
        res.json({
            data: "notice delete"
        });
    }


}

module.exports = new NoticesController;
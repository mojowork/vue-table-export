module.exports = function (tableId, filename='default-name', type='xls') {
    var office = require('./office'),
        doc = document,
        charset= doc.charset,
        table = doc.getElementById(tableId)

    var uri = {
        doc: 'application/msword',
        docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        xls: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    }

    if (['doc','docx','xls','xlsx'].indexOf(type) !== -1) {
        var data = office(table, charset, type)
        require('file-saver').saveAs(new Blob([data], {
            type: uri[type]
        }), filename + '.' + type)    
    } else {
        throw new Error('tableExport only supported Word or Excel')
    }
}
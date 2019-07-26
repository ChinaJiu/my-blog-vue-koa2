import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
    install (Vue, options) {
        Vue.prototype.getPdf = function ({ box = '' } = {}) {
            var title = 'content'
            html2Canvas(document.querySelector(box), {
                dpi: 192,
                // scale: 2,
                allowTaint: true
            }).then(function (canvas) {
                // A4 592.28 * 841.89
                let contentWidth = canvas.width
                let contentHeight = canvas.height

                let widthA4 = 592.28 // A4pdf w
                let heightA4 = 841.89 // A4pdf h
                let canvasDpr = contentWidth / contentHeight
                // 内容页高度    widthA4也是内容页宽度
                let pageHeight = widthA4 / canvasDpr - 200
                let newPageHeight = pageHeight
                console.log(canvasDpr, pageHeight)
                let position = 0
                let pageData = canvas.toDataURL('image/jpeg', 1.0)
                let PDF = new JsPDF('', 'pt', 'a4')
                console.log(pageHeight, heightA4)
                // 当内容未超过pdf一页显示的范围，无需分页
                if (pageHeight < heightA4) {
                    PDF.addImage(pageData, 'JPEG', 0, position, widthA4, pageHeight)
                } else {
                    while (pageHeight > 0) {
                        PDF.addImage(pageData, 'JPEG', 0, position, widthA4, newPageHeight)
                        pageHeight -= heightA4
                        position -= heightA4
                        // 避免添加空白页
                        if (pageHeight > 0) {
                            PDF.addPage()
                        }
                    }
                }
                PDF.save(title + '.pdf')
            })
        }
    }
}

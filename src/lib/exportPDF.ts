import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import moment from "moment";
// import * as fs from 'fs'
import { TDocumentDefinitions } from "pdfmake/interfaces";
//  moment.locale('vi')
(<any>pdfMake).addVirtualFileSystem(pdfFonts);

export const convertMoney = (num: number) => {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};
function ConvertPDF(invoice: {
  id: number;
  name: string;
  address: string;
  detail: { name: string; price: number; quantity: number; total: number }[];
  sumTotal: number;
  createdAt: Date;
}) {
  const data = {
    invoicenumber: invoice["id"],
    buyername: invoice["name"],
    buyeraddress: invoice["address"],
    item: invoice["detail"],
    price: invoice["sumTotal"],
    date: invoice["createdAt"],
  };
  const listItem = [];
  //   for (var i = 0; i < data.item.length; i++) {
  //     listItem.push([
  //       {
  //         text: "" + (i + 1),
  //         border: [false, true, false, true],
  //         margin: [0, 0, 0, 0],
  //       },
  //       {
  //         text: data.item[i].name,
  //         border: [false, true, false, true],
  //         margin: [0, 0, 0, 0],
  //       },
  //       {
  //         text: convertMoney(data.item[i].price),
  //         border: [false, true, false, true],
  //         margin: [0, 0, 0, 0],
  //       },
  //       {
  //         text: data.item[i].quantity.toString(),
  //         alignment: "center",
  //         border: [false, true, false, true],
  //         margin: [0, 0, 0, 0],
  //       },
  //       {
  //         text: convertMoney(data.item[i].total),
  //         border: [false, true, false, true],
  //         margin: [0, 0, 0, 0],
  //       },
  //     ]);
  //   }
  const docDefinition: TDocumentDefinitions = {
    content: [
      {
        fontSize: 11,
        table: {
          widths: ["50%", "50%"],
          body: [
            [
              {
                text: "Liên 1: Lưu",
                border: [false, false, false, true],
                margin: [-5, 0, 0, 10],
              },
              {
                text: "Tâm An Parmacy #" + data.invoicenumber,
                alignment: "right",
                border: [false, false, false, true],
                margin: [0, 0, 0, 10],
              },
            ],
          ],
        },
      },
      {
        layout: "noBorders",
        fontSize: 11,
        table: {
          widths: ["33%", "33%", "33%"],
          body: [
            [
              { text: "TamAnParmacy.com.vn", margin: [0, 10, 0, 0] },
              { text: "", alignment: "centre", margin: [0, 10, 0, 0] },
              {
                text:
                  "Ngày lập: " + moment(data.date).format("DD/MM/YYYY, HH:mm"),
                alignment: "right",
                margin: [0, 10, 0, 0],
              },
            ],
            ["", "", ""],
            [
              {
                colSpan: 3,
                text: "HOÁ ĐƠN BÁN HÀNG",
                bold: true,
                fontSize: 24,
                alignment: "center",
              },
              "",
              "",
            ],
            [" ", "", ""],
          ],
        },
      },
      {
        fontSize: 11,
        table: {
          widths: ["50%", "50%"],
          body: [
            [
              {
                text: " ",
                border: [false, false, false, true],
                margin: [0, 0, 0, 10],
              },
              {
                text: "Thành tiền: " + convertMoney(data.price),
                alignment: "right",
                border: [false, false, false, true],
                margin: [0, 0, 0, 10],
              },
            ],
          ],
        },
      },
      {
        layout: "noBorders",
        fontSize: 11,
        table: {
          widths: ["100%"],
          body: [
            [{ text: "Khách hàng:", margin: [0, 10, 0, 0] }],
            [{ text: data.buyername, marginLeft: 10 }],
            [{ text: `Địa chỉ: ${data.buyeraddress}` }],
          ],
        },
      },
      {
        fontSize: 11,
        table: {
          widths: ["5%", "51%", "15%", "13%", "15%"],
          body: [
            [
              { text: "STT", border: [false, true, false, true] },
              { text: "Sản phẩm", border: [false, true, false, true] },
              { text: "Giá", border: [false, true, false, true] },
              {
                text: "SL",
                alignment: "center",
                border: [false, true, false, true],
              },
              { text: "T.Tiền", border: [false, true, false, true] },
            ],
            ...data.item.map((item, i) => {
              return [
                {
                  text: "" + (i + 1),
                  border: [false, true, false, true],
                  margin: [0, 0, 0, 0],
                },
                {
                  text: item.name,
                  border: [false, true, false, true],
                  margin: [0, 0, 0, 0],
                },
                {
                  text: convertMoney(item.price),
                  border: [false, true, false, true],
                  margin: [0, 0, 0, 0],
                },
                {
                  text: item.quantity.toString(),
                  alignment: "center",
                  border: [false, true, false, true],
                  margin: [0, 0, 0, 0],
                },
                {
                  text: convertMoney(item.total),
                  border: [false, true, false, true],
                  margin: [0, 0, 0, 0],
                },
              ];
            }),
          ],
        },
        marginTop: 10,
      },
      {
        layout: "noBorders",
        fontSize: 11,
        margin: [0, 0, 5, 0],
        table: {
          widths: ["85%", "15%"],
          body: [
            [
              { text: "Tổng cộng:", alignment: "right", margin: [0, 5, 0, 0] },
              { text: convertMoney(data.price), margin: [0, 5, 0, 0] },
            ],
            [
              {
                text: "Phí vận chuyển:",
                alignment: "right",
                margin: [0, 5, 0, 0],
              },
              { text: convertMoney(15000), margin: [0, 5, 0, 0] },
            ],
            [{ text: "Thuế %:", alignment: "right" }, convertMoney(0)],
          ],
        },
      },
      {
        fontSize: 11,
        table: {
          widths: ["85%", "15%"],
          body: [
            [
              {
                text: "Thanh toán:",
                alignment: "right",
                border: [false, false, false, true],
                margin: [0, 0, 0, 10],
              },
              {
                text: convertMoney(data.price),
                border: [false, false, false, true],
                margin: [0, 0, 0, 10],
              },
            ],
          ],
        },
      },
      {
        layout: "noBorders",
        fontSize: 11,
        alignment: "center",
        table: {
          widths: ["100%"],
          body: [
            [{ text: " ", margin: [0, 10, 0, 0] }],
            ["Nhà thuốc Đông Y Tâm An"],
            ["Địa chỉ: Hưng Lợi, Ninh Kiều, Cần Thơ"],
            ["TamAnParmacy.com.vn"],
            ["Hẹn gặp lại"],
          ],
        },
      },
    ],
  };

  // const re: TDocumentDefinitions = docDefinition
  var pdfDoc = pdfMake.createPdf(docDefinition);
  //    pdfDoc.getStream((doc)=>
  //      fs.createWriteStream(
  //        `/public/invoices_pdf/${data.invoicenumber}.pdf`,
  //      ),
  //    );
  pdfDoc.open();
}

export default ConvertPDF;

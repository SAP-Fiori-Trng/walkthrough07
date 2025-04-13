sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
  ],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("dw.ui5.walkthrough.07.controller.App", {
      onInit: function () {
        this._oI18n = this.getOwnerComponent().getModel("i18n");
        this._oJSONModel = this.getOwnerComponent().getModel();
      },
      onSayHelloPress: function () {
        const oResourceBundle = this._oI18n.getResourceBundle();
        let sRecipientName = this._oJSONModel.getProperty("/recipient/name");
        let sMsg = oResourceBundle.getText("helloMsg", [sRecipientName]);
        MessageToast.show(sMsg);
      }
    });
  }
);
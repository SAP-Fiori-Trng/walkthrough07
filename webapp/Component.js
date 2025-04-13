sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("dw.ui5.walkthrough.07.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        rootView: {
          viewName: "dw.ui5.walkthrough.07.view.App",
          type: "XML",
          id: "app",
        },
      },
      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments);
        // set data model
        const oData = {
          recipient: {
            name: "SAP Fiori 开发之创建第一个 Component",
          },
        };
        const oModel = new JSONModel(oData);
        this.setModel(oModel);

        // set i18n model
        const i18nModel = new ResourceModel({
          bundleName: "dw.ui5.walkthrough.07.i18n.i18n",
        });
        this.setModel(i18nModel, "i18n");
      }
    });
  }
);
Confluence.Blueprint.setWizard('com.progressoft.plugins.tutorial.confluence.spacebp:create-by-progressoft-space-template', function(wizard) {});
AJS.bind("blueprint.wizard-register.ready", function () {
    function submitProgressoftSpace(e, state) {
        state.pageData.ContentPageTitle = state.pageData.name + " " + AJS.I18n.getText("confluence.blueprints.space.eprogressoft.home.title.suffix"); 
        return Confluence.SpaceBlueprint.CommonWizardBindings.submit(e, state);
    }
    function preRenderProgressoftSpace(e, state) {
        state.soyRenderContext['atlToken'] = AJS.Meta.get('atl-token');
        state.soyRenderContext['showSpacePermission'] = true; 
    }
    Confluence.Blueprint.setWizard('com.progressoft.plugins.tutorial.confluence.spacebp:progressoft-space-blueprint-item', function(wizard) {
        wizard.on("submit.progressoftSpaceId", submitProgressoftSpace);
        wizard.on("pre-render.progressoftSpaceId", preRenderProgressoftSpace);
        wizard.on("post-render.progressoftSpaceId", Confluence.SpaceBlueprint.CommonWizardBindings.postRender);
    });
});
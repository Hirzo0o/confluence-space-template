AJS.bind("blueprint.wizard-register.ready", function () {
    function submitProgressoftSpace(e, state) {
        state.pageData.ContentPageTitle = state.pageData.name + " " + AJS.I18n.getText("confluence.blueprints.space.eprogressoft.home.title.suffix"); 
        return Confluence.SpaceBlueprint.CommonWizardBindings.submit(e, state);
    }
    function preRenderExampleSpace(e, state) {
        state.soyRenderContext['atlToken'] = AJS.Meta.get('atl-token');
        state.soyRenderContext['showSpacePermission'] = false; 
    }
    Confluence.Blueprint.setWizard('com.example.plugins.tutorial.confluence.spacebp.spacebp:progressoft-space-blueprint-item', function(wizard) {
        wizard.on("submit.progressoftSpaceId", submitProgressoftSpace);
        wizard.on("pre-render.progressoftSpaceId", preRenderProgressoftSpace);
        wizard.on("post-render.progressoftSpaceId", Confluence.SpaceBlueprint.CommonWizardBindings.postRender);
    });
});
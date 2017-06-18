"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PreventUnsavedChangesGuard {
    canDeactivate(component) {
        if (component.form.dirty)
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        return true;
    }
}
exports.PreventUnsavedChangesGuard = PreventUnsavedChangesGuard;
//# sourceMappingURL=prevent-unsaved-changes-guard.service.js.map
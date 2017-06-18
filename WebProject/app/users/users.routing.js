"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const user_form_component_1 = require("./user-form.component");
const users_component_1 = require("./users.component");
const prevent_unsaved_changes_guard_service_1 = require("../prevent-unsaved-changes-guard.service");
exports.usersRouting = router_1.RouterModule.forChild([
    {
        path: 'users/:id',
        component: user_form_component_1.UserFormComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    {
        path: 'users/new',
        component: user_form_component_1.UserFormComponent,
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    },
    { path: 'users', component: users_component_1.UsersComponent },
]);
//# sourceMappingURL=users.routing.js.map
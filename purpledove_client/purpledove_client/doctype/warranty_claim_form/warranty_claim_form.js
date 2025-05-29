// Copyright (c) 2025, Lassod Consulting Limited and contributors
// For license information, please see license.txt

frappe.ui.form.on('Warranty Claim Form', {
    refresh: function(frm) {
        if (frm.doc.expiry_date) {
            const expiry = frappe.datetime.str_to_obj(frm.doc.expiry_date);
            const today = frappe.datetime.get_today();
            const diff_days = frappe.datetime.get_diff(expiry, today);

            let indicator = "green";
            if (diff_days <= 30) {
                indicator = "red";
            } else if (diff_days <= 150) {
                indicator = "orange";
            }

            frm.set_indicator_color(indicator);
        }
    }
});

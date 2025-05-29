# Copyright (c) 2025, Lassod Consulting Limited and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class WarrantyClaimForm(Document):
	pass

def get_indicator(doc):
    from frappe.utils import getdate, today, date_diff
    days_remaining = date_diff(doc.expiry_date, today()) if doc.expiry_date else None

    if days_remaining is not None:
        if days_remaining <= 30:
            return ("Expiring Soon", "red", "expiry_date,<=,{}".format(doc.expiry_date))
        elif days_remaining <= 150:
            return ("Expiring", "orange", "expiry_date,<=,{}".format(doc.expiry_date))
        else:
            return ("Valid", "green", "expiry_date,<=,{}".format(doc.expiry_date))
    else:
        return ("No Expiry", "gray", "")

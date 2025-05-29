import frappe
from frappe.utils import today, add_months

def send_expiry_notifications():
    target_date = add_months(today(), 5)
    docs = frappe.get_all("Warranty Claim Form",  # Replace with your actual DocType
        filters={
            "expiry_date": ["between", [target_date, add_months(target_date, 1)]],
        },
        fields=["name", "expiry_date", "company_name", "lease_title"]
    )

    for doc in docs:
        message = f"""
        <b>Reminder:</b><br>
        Lease <b>{doc.lease_title}</b> for company <b>{doc.company_name}</b> is expiring on <b>{doc.expiry_date}</b>.<br>
        Please take necessary action.
        """
        recipients = {doc.name_of_employee}  # Replace with dynamic or static email list

        frappe.sendmail(
            recipients=recipients,
            subject="Lease Expiry Reminder",
            message=message
        )

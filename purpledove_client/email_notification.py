import frappe
from frappe.utils import today, add_months, add_days

def send_expiry_notifications():
    target_date_start = today()
    target_date_end = add_months(today(), 5)

    docs = frappe.get_all("Warranty Claim Form",
        filters={
            "expiry_date": ["between", [target_date_start, target_date_end]],
        },
        fields=["name", "expiry_date", "company_name", "lease_title", "name_of_employee", "last_notified_date"]
    )

    for doc in docs:
        # Check if a notification was sent in the past 7 days
        if doc.last_notified_date and frappe.utils.date_diff(today(), doc.last_notified_date) < 7:
            continue  # Skip sending if already notified this week

        message = f"""
        <b>Reminder:</b><br>
        Lease <b>{doc.lease_title}</b> for company <b>{doc.company_name}</b> is expiring on <b>{doc.expiry_date}</b>.<br>
        Please take necessary action.
        """

        # Replace with actual email logic
        employee_email = frappe.db.get_value("Employee", doc.name_of_employee, "user_id") if doc.name_of_employee else None
        recipients = [employee_email] if employee_email else ["admin@example.com"]  # Fallback email

        frappe.sendmail(
            recipients=recipients,
            subject="Lease Expiry Reminder",
            message=message
        )

        # Update last_notified_date
        frappe.db.set_value("Warranty Claim Form", doc.name, "last_notified_date", today())

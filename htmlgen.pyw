import tkinter as tk
from tkinter import ttk
from datetime import datetime

# Define global variables for entry fields
url_entry = None
link_name_entry = None
dev_name_entry = None
update_date_entry = None
month_dropdown = None
day_dropdown = None
year_dropdown = None

def generate_html():
    global url_entry, link_name_entry, dev_name_entry, update_date_entry, month_dropdown, day_dropdown, year_dropdown

    # Get input data from text fields
    url = url_entry.get()
    link_name = link_name_entry.get()
    dev_name = dev_name_entry.get()

    # Get selected date from dropdowns
    selected_month = month_dropdown.get()
    selected_day = day_dropdown.get()
    selected_year = year_dropdown.get()

    # Format the date
    update_date = f"{selected_month} {selected_day}, {selected_year}"

    # If the update_date checkbox is not checked, set update_date to an empty string
    if not update_date_checkbox_var.get():
        update_date = ""

    # Generate HTML code with the input data
    html_code = f"""
    <tr>
        <!-- URL + Name of Link-->
        <td><a href="{url}" rel="noopener">{link_name}</a></td>
        <!-- Dev name -->
        <td>{dev_name}</td>
        <!-- Last Update Date -->
        <td>{update_date}</td>
    </tr>
    """

    # Save the HTML code to a text file
    with open("output.html", "w") as file:
        file.write(html_code)

    # Inform the user that the HTML code has been saved
    output_label.config(text="HTML code generated and saved to output.html")

# Create the main window
root = tk.Tk()
root.title("HTML Generator")

# Create input fields and labels
url_label = ttk.Label(root, text="URL:")
url_label.grid(row=0, column=0, padx=5, pady=5, sticky="e")
url_entry = ttk.Entry(root, width=40)
url_entry.grid(row=0, column=1, padx=5, pady=5)

link_name_label = ttk.Label(root, text="Name of Link:")
link_name_label.grid(row=1, column=0, padx=5, pady=5, sticky="e")
link_name_entry = ttk.Entry(root, width=40)
link_name_entry.grid(row=1, column=1, padx=5, pady=5)

dev_name_label = ttk.Label(root, text="Developer Name:")
dev_name_label.grid(row=2, column=0, padx=5, pady=5, sticky="e")
dev_name_entry = ttk.Entry(root, width=40)
dev_name_entry.grid(row=2, column=1, padx=5, pady=5)

# Create a checkbox for the last update date
update_date_checkbox_var = tk.BooleanVar()
update_date_checkbox = ttk.Checkbutton(root, text="Update Date", variable=update_date_checkbox_var)
update_date_checkbox.grid(row=3, column=0, columnspan=2, padx=5, pady=5)

# Entry for the last update date
update_date_frame = ttk.Frame(root)
update_date_frame.grid(row=4, column=0, columnspan=2)

last_update_label = ttk.Label(update_date_frame, text="Last Update Date:")
last_update_label.grid(row=0, column=0, padx=5, pady=5, sticky="e")

# Dropdown menu for selecting month
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
month_dropdown = ttk.Combobox(update_date_frame, values=months, width=10)
month_dropdown.grid(row=0, column=1, padx=5, pady=5)
month_dropdown.set('January')  # Default value

# Dropdown menu for selecting day
days = [str(i) for i in range(1, 32)]
day_dropdown = ttk.Combobox(update_date_frame, values=days, width=5)
day_dropdown.grid(row=0, column=2, padx=5, pady=5)
day_dropdown.set('1')  # Default value

# Dropdown menu for selecting year
years = [str(i) for i in range(1999, 2100)]
year_dropdown = ttk.Combobox(update_date_frame, values=years, width=7)
year_dropdown.grid(row=0, column=3, padx=5, pady=5)
year_dropdown.set('2022')  # Default value

# Enable or disable the last update date entry based on checkbox state
def toggle_update_date_entry():
    if update_date_checkbox_var.get():
        month_dropdown.config(state="readonly")
        day_dropdown.config(state="readonly")
        year_dropdown.config(state="readonly")
    else:
        month_dropdown.set('January')
        day_dropdown.set('1')
        year_dropdown.set('2022')
        month_dropdown.config(state="disabled")
        day_dropdown.config(state="disabled")
        year_dropdown.config(state="disabled")

# Disable the dropdown menus initially
toggle_update_date_entry()

update_date_checkbox.config(command=toggle_update_date_entry)

# Create the "Generate HTML" button
generate_button = ttk.Button(root, text="Generate HTML", command=generate_html)
generate_button.grid(row=5, column=0, columnspan=2, padx=5, pady=5)

# Label to display output message
output_label = ttk.Label(root, text="")
output_label.grid(row=6, column=0, columnspan=2)

# Credits label
credits_label = tk.Label(root, text="Created by Demi of WoS", font=("Helvetica", 10, "italic"))
credits_label.grid(row=7, column=0, columnspan=2, pady=(0, 10))

# Run the application
root.mainloop()

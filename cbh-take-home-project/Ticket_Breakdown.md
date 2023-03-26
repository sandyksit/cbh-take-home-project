# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Modify the Shifts table in the database to include a new column for Agent metadata.
Create a new function called getShiftsByFacility that takes in a Facility ID and returns all Shifts worked in the last quarter, including the metadata of the assigned Agents.
Create a new function called generateReport that takes in a list of Shifts and converts them into a PDF file.
2. When a Facility wants to generate a compliance report, call the getShiftsByFacility function with the Facility ID to retrieve the Shifts data, and then call the generateReport function to convert it into a PDF file.
3. Add a new endpoint to the API that allows Facilities to submit the generated PDF files as compliance reports.
Dependencies:

4. Access to the database to modify the Shifts table and add the new function.
A PDF generation library to create the PDF reports.
A PDF submission endpoint in the API to accept the generated reports.
Potential issues:

. Ensuring the metadata about the Agents is properly formatted and stored in the database.
. Ensuring the PDF reports are generated accurately and contain all necessary data.
. Ensuring the submission endpoint is secure and can handle large PDF files
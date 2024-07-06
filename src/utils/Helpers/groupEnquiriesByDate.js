export function groupEnquiriesByDate(enquiries = []) {
  const groupedEnquiries = new Map();
  for (const enquiry of enquiries) {
    if (!groupedEnquiries.has(enquiry.createdAt))
      groupedEnquiries.set(enquiry.createdAt, [enquiry]);
    else groupedEnquiries.get(enquiry.createdAt).push(enquiry);
  }
  return groupedEnquiries;
}

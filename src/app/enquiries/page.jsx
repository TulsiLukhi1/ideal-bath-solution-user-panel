import EnquiryPageLayout from '@/layouts/EnquiryPageLayout'

const EnquiryPage = () => {
  return (
    <EnquiryPageLayout />
  )
}

export default EnquiryPage


export async function generateMetadata() {
  return {
    title: "Enquiries - Ideal Bath Solutions",
    description: "Enquiries",
  };
}

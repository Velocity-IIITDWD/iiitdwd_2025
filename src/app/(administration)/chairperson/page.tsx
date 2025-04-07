import Profile from '../director/profile';

export default async function Page() {
  return (
    <Profile
      image="https://iiitdwd.ac.in/images/Sridhar%20Vembu.webp"
      email="chairperson@iiitdwd.ac.in"
      name="Dr. Sridhar Vembu"
      position="Chairperson, IIIT Dharwad"
      quote={``}
      about={[
        `Dr. Sridhar Vembu is the co-founder and Chief Scientist of Zoho Corporation, a globally respected technology leader and a pioneer in rural development through innovation. Raised in a humble village in Tamil Nadu, India, Dr. Vembu's academic journey led him to earn a degree in Electrical Engineering from IIT Madras and a Ph.D. from Princeton University.
In 1996, he co-founded AdventNet, which evolved into Zoho Corporation in 2009. Under his visionary leadership, Zoho grew into a global provider of cloud-based business software, empowering millions of users and businesses across the world. The company operates with a strong philosophy of self-reliance, long-term thinking, and customer-focused innovation.`,

        `A defining aspect of Dr. Vembu's mission has been his unwavering commitment to social impact. He has championed the establishment of offices in rural areas, such as Tenkasi in Tamil Nadu, to decentralize opportunities and bring technological innovation closer to underserved regions. His initiative, Zoho Schools of Learning, offers free vocational education to high school graduates, especially from rural communities, providing them with hands-on training and job opportunities without the burden of a formal college degree.

Dr. Vembu's approach to business blends technological excellence with deep social responsibility. His work has earned him numerous accolades, including the Padma Shri in 2021 and CNN-News18 Indian of the Year in 2022. In 2025, he transitioned from the role of CEO to Chief Scientist, dedicating his focus to research, product innovation, and the long-term vision of Zoho.`,

        `Respected for his humility, foresight, and belief in inclusive growth, Dr. Sridhar Vembu continues to inspire a generation of entrepreneurs to think beyond conventional boundaries and create impact-driven enterprises.
`
      ]}
      // signatureText="Dr. Sridhar Vembu"
      // signaturePosition="Chairperson, IIIT Dharwad"
    />
  );
}

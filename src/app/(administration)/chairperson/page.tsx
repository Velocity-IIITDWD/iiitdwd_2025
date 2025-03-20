import Profile from '../director/profile';

export default async function Page() {
  return (
    <Profile
      image="https://iiitdwd.ac.in/images/Sridhar%20Vembu.webp"
      email="chairperson@iiitdwd.ac.in"
      name="Dr. Sridhar Vembu"
      position="Chairperson, IIIT Dharwad"
      quote={`" add chairperson sir's one liner "`}
      about={[
        `CHANGE THIS! Sridhar Vembu (born 1968) is an Indian billionaire business magnate and the founder and former chief executive officer of the Zoho Corporation.[2] According to Forbes, he is the 39th richest person in India with a net worth of $5.85 billion, as of 2024.[3] He was awarded India's fourth highest civilian award, the Padma Shri, in 2021.[4][5]

As per Forbes list of India’s 100 richest tycoons, dated OCTOBER 09, 2024, Sridhar Vembu & siblings are ranked 51st with a net worth of $5.8 Billion.[6]
`
      ]}
      signatureText="Dr. Sridhar Vembu"
      signaturePosition="Chairperson, IIIT Dharwad

"
    />
  );
}

import ProfilePage from '@/app/(administration)/director/profile';
import director from '@/assets/director.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Director',
  description: 'Director of IIIT Dharwad'
};

export default function DirectorPage() {
  return (
    <ProfilePage
      image={director}
      email="director@iiitdwd.ac.in"
      youtubeLink="https://www.youtube.com/@profmahadevaprasanna"
      youtubeName="Prof. Mahadeva Prasanna"
      name="Prof. S. R. Mahadeva Prasanna"
      position="Director, IIIT Dharwad"
      quote={`" add director sir's one liner "`}
      about={[
        `S. R. Mahadeva Prasanna is a recipient of the National Award for Teachers 2023 from the honorable President of India Smt. Droupadi Murmu. He is currently working as Director, IIIT Dharwad on leave from IIT Dharwad. He is Professor in the Dept. of Electrical, Electronics and Communication (EECE) at IIT Dharwad. He was Dean(Faculty Welfare) at IIT Dharwad before taking charge of Director at IIIT Dharwad. He was earlier Professor in the Dept. of Electronics and Electrical Engineering and Dean (Research & Development), IIT Guwahati. He earned his PhD from IIT Madras in 2004, MTech from NITK Surathkal (then KREC Surathkal) in 1997 and BE from SSIT Tumakuru in 1994. He teaches signal processing, speech processing, artificial intelligence, machine learning and deep learning related courses. His research interests are in speech processing. He has supervised 28 PhD research scholars in the areas of speech and handwriting processing.`,
        "Currently 7 scholars are working for their PhD / MS degrees. He has published over 115 journal articles and 200 conference articles in reputed national and international journals and conferences. He has executed large volume externally funded projects from public and private funding agencies. He is also a consultant for many industries working in the niche technology areas, especially, speech technology. On the academic administration front, at IIT Guwahati he was faculty-in-charge, counseling cell, chairman, students' welfare board, organizing vice-chairman, GATE 2010, Chairman, GATE 2011, Associate Dean (Research and Development) and Dean (Research & Development). At IIT Dharwad, he was Dean (Faculty Welfare) and Dean (Research & Development) from July 2017 till March 2023. From March 2023 till April 2024, he continued as Dean (Faculty Welfare). He also served IIT Dharwad on different committees towards setting up the institute of national importance in Dharwad, Karnataka."
      ]}
      signatureText="Prof. S. R. Mahadeva Prasanna"
      signaturePosition="Director IIIT Dharwad"
    />
  );
}

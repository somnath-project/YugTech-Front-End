import { PageLayout } from '@/components/Layout';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    bio: 'Education technology expert with 15+ years experience in online learning platforms.',
    image: '/images/team/john.jpg'
  },
  {
    name: 'Sarah Johnson',
    role: 'Head Instructor',
    bio: 'Lead curriculum developer with a passion for creating engaging learning experiences.',
    image: '/images/team/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Technical Director',
    bio: 'Full-stack developer specializing in educational platform architecture.',
    image: '/images/team/michael.jpg'
  },
  {
    name: 'Emma Wilson',
    role: 'Student Success',
    bio: 'Dedicated to ensuring every student achieves their learning goals.',
    image: '/images/team/emma.jpg'
  }
];

export default function OurTeam() {
  return (
    <PageLayout title="Our Team" effectiveDate="January 1, 2024">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <div className="aspect-square mb-4 overflow-hidden rounded-full">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600 mb-2">{member.role}</p>
            <p className="text-sm text-gray-500">{member.bio}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
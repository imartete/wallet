import { UserForm } from 'components/UserForm/UserForm';
import { Section } from 'components/Section/Section';

const StatisticsPage = () => {
  return (
    <div>
      <Section title="Phonebook">
        <UserForm />
      </Section>
      <Section title="Contacts"></Section>
    </div>
  );
};

export default StatisticsPage;

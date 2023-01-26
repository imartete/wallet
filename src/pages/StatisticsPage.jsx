import { UserForm } from 'components/UserForm/UserForm';
import { Section } from 'components/Section/Section';
import { StatisticsList } from 'components/StatisticsList/StatisticsList';

const StatisticsPage = () => {
  return (
    <div>
      <Section title="Phonebook">
        <UserForm />
      </Section>
      <Section title="Contacts">
        <>
          <StatisticsList />
        </>
      </Section>
    </div>
  );
};

export default StatisticsPage;

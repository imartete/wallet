import { UserForm } from 'components/UserForm/UserForm';
import { Section } from 'components/Section/Section';

import { StatisticsList } from 'components/StatisticsList/StatisticsList';

const StatisticsPage = () => {
  return (
    <div>
      <Section title="User">
        <UserForm />
      </Section>
      HEAD
      <Section title="Contacts"></Section>
      <Section title="Statistics">
        <>
          <StatisticsList />
        </>
      </Section>
    </div>
  );
};

export default StatisticsPage;

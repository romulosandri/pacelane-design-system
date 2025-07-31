import React from 'react';
import SuggestionCard from './design-system/components/SuggestionCard';

const SuggestionCardPlayground = () => {
  // Mock content cards data
  const contentCards = [
    {
      title: 'Content Strategy',
      subtitle: 'Last edited 2 days ago',
      content: 'Create engaging social media content that resonates with your target audience. Focus on storytelling and visual appeal.',
      variant: 'gradient'
    },
    {
      title: 'Growth Tactics',
      subtitle: 'Last edited 3 days ago',
      content: 'Implement proven growth strategies to expand your reach and engagement. Leverage data-driven insights for optimization.',
      variant: 'gradient'
    }
  ];

  return (
    <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Suggestion Card</h1>
      
      <div style={{ marginTop: '32px' }}>
        <SuggestionCard
          title="For Today"
          description="Based on your audience engagement patterns, here are some content suggestions that could boost your reach and interaction rates."
          contentCards={contentCards}
          onCalendarClick={() => console.log('Calendar clicked')}
          onGenerateClick={() => console.log('Generate clicked')}
        />
      </div>
    </div>
  );
};

export default SuggestionCardPlayground;
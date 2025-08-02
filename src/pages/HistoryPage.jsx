import React, { useState } from 'react';
import { useTheme } from '../services/theme-context.jsx';
import { navigateToContentEditor } from '../services/navigation.js';
import { spacing } from '../design-system/tokens/spacing.js';
import { textStyles } from '../design-system/styles/typography/typography-styles.js';
import { typography } from '../design-system/tokens/typography.js';

// Design System Components
import Button from '../design-system/components/Button.jsx';
import Input from '../design-system/components/Input.jsx';
import ContentCard from '../design-system/components/ContentCard.jsx';
import DropdownMenu from '../design-system/components/DropdownMenu.jsx';

// Icons
import { 
  Search, 
  ChevronDown
} from 'lucide-react';

/**
 * HistoryPage - Shows user's content creation history with search, filtering, and sorting
 */
const HistoryPage = () => {
  const { colors } = useTheme();
  
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('lastEdited');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Mock history data - following ContentCard structure
  const historyItems = [
    {
      id: 'linkedin-product-launch',
      title: 'Product Launch Announcement',
      subtitle: 'Last edited 2 hours ago',
      content: `🚀 Excited to announce the launch of our new AI-powered content creation platform!

After months of development and user testing, we're thrilled to share this revolutionary tool that helps content creators:

• Generate high-quality content 10x faster
• Maintain consistent brand voice across all platforms  
• Optimize content for maximum engagement
• Scale content production effortlessly

The beta testing results have been incredible - early users are seeing 40% higher engagement rates and saving 75% of their content creation time.

Ready to transform your content strategy? Link in comments to join the early access program.

#ProductLaunch #ContentCreation #AI #Productivity`,
      type: 'social',
      date: '2024-01-15',
      status: 'published',
      variant: 'gradient'
    },
    {
      id: 'remote-work-guide',
      title: 'The Future of Remote Work',
      subtitle: 'Last edited yesterday',
      content: `# The Future of Remote Work: A Comprehensive Guide

## Introduction
The landscape of work has fundamentally shifted. Remote work isn't just a temporary solution—it's the future of how we collaborate, create, and innovate.

## Key Trends Shaping Remote Work

### 1. Hybrid Models Become Standard
- Flexible schedules that prioritize outcomes over hours
- Office spaces reimagined as collaboration hubs
- Technology that seamlessly bridges physical and digital workspaces

### 2. Mental Health Takes Center Stage
- Burnout prevention through better work-life boundaries
- Regular check-ins and wellness programs
- Flexible time off and mental health days

### 3. Global Talent Access
- Companies hiring from anywhere in the world
- Diverse teams bringing fresh perspectives
- Cost optimization through strategic location independence

## Tools for Success
The right technology stack makes all the difference:
- Communication: Slack, Microsoft Teams, Discord
- Collaboration: Figma, Miro, Notion
- Project Management: Asana, Monday, Linear
- Video Conferencing: Zoom, Google Meet, Loom

## Building Remote Culture
Culture isn't about ping pong tables—it's about connection:
- Regular virtual coffee chats and social events
- Clear communication protocols and expectations  
- Recognition and celebration of achievements
- Mentorship and professional development opportunities

## The Bottom Line
Remote work requires intentional design. Companies that embrace this shift and invest in the right processes, tools, and culture will attract the best talent and build the most innovative teams.

What's your experience with remote work? Share your thoughts in the comments.`,
      type: 'blog',
      date: '2024-01-12',
      status: 'draft',
      variant: 'image'
    },
    {
      id: 'newsletter-template',
      title: 'Weekly Product Update Template',
      subtitle: 'Last edited 3 days ago',
      content: `# Weekly Product Update - [Week of DATE]

## 🎯 This Week's Highlights

### New Features Shipped
- **[Feature Name]**: Brief description of what it does and why it matters
- **[Feature Name]**: Brief description of what it does and why it matters

### Bug Fixes & Improvements
- Fixed issue with [specific problem]
- Improved performance of [specific area]
- Enhanced accessibility in [specific component]

## 📈 Key Metrics
- **Active Users**: [Number] ([+/-]% from last week)
- **Feature Adoption**: [Percentage] of users trying new feature
- **Customer Satisfaction**: [Score]/10 based on recent surveys

## 🔜 Coming Next Week
- Launch of [upcoming feature]
- A/B testing for [specific improvement]
- User interviews for [research focus]

## 💡 Team Spotlight
Shoutout to [Team Member] for [specific achievement]. Their work on [project] helped us [impact/result].

## 📣 Company News
- [Relevant company announcement]
- [Team update or hiring news]
- [Industry recognition or press coverage]

---
*Have feedback on this update? Reply to this email or drop a message in #product-feedback*`,
      type: 'template',
      date: '2024-01-10',
      status: 'saved',
      variant: 'gradient'
    },
    {
      id: 'competitor-analysis',
      title: 'Q1 Competitive Analysis Report',
      subtitle: 'Last edited 1 week ago',
      content: `# Q1 2024 Competitive Landscape Analysis

## Executive Summary
The competitive landscape in our market segment continues to evolve rapidly. This analysis covers key players, emerging trends, and strategic opportunities for Q2 planning.

## Market Overview
- **Market Size**: $2.4B globally, growing at 15% YoY
- **Key Growth Drivers**: AI adoption, remote work trends, content marketing expansion
- **Geographic Expansion**: Strong growth in APAC and European markets

## Competitive Analysis

### Direct Competitors

#### Competitor A
- **Strengths**: Strong brand recognition, enterprise sales team
- **Weaknesses**: Limited API capabilities, slow innovation cycle
- **Recent Moves**: Acquired startup for $50M, launched mobile app
- **Market Share**: 23%

#### Competitor B  
- **Strengths**: Technical innovation, developer-friendly platform
- **Weaknesses**: Poor customer support, complex pricing
- **Recent Moves**: Raised Series C, expanded European presence
- **Market Share**: 18%

### Emerging Players
- **Startup C**: AI-first approach, gaining traction with SMBs
- **Startup D**: Vertical-specific solution for healthcare industry

## Strategic Opportunities
1. **API-First Development**: Competitors lag in developer experience
2. **Customer Success**: Opportunity to differentiate through support quality
3. **Pricing Transparency**: Market demands simpler pricing models
4. **Mobile Experience**: Underserved market segment

## Recommendations
- Accelerate API development roadmap
- Invest in customer success team expansion  
- Simplify pricing structure for Q2 launch
- Begin mobile app development

## Threat Assessment
**High Risk**: New entrant with significant VC backing
**Medium Risk**: Established player expanding into our segment
**Low Risk**: Current competitors maintaining status quo

## Next Steps
- Monthly competitive intelligence updates
- Customer interview program to understand switching factors
- Product gap analysis based on competitor feature comparison`,
      type: 'research',
      date: '2024-01-08',
      status: 'completed',
      variant: 'image'
    },
    {
      id: 'twitter-industry-insights',
      title: 'Tech Industry Insights Thread',
      subtitle: 'Last edited 2 weeks ago',
      content: `🧵 8 key insights about the future of technology that every founder should know:

1/ AI won't replace humans, but humans with AI will replace humans without AI.

The companies winning today aren't those with the best AI—they're the ones that best integrate AI into human workflows.

2/ The API economy is exploding.

Every company is becoming a platform. If you're not thinking about how to make your product programmable, you're missing a massive opportunity.

3/ Remote-first isn't just about location—it's about async-first thinking.

The best remote companies optimize for asynchronous communication. This makes them faster and more thoughtful than traditional companies.

4/ Developer experience is the new user experience.

Products with great DX get adopted faster, retained longer, and become more defensible. Invest in your docs, APIs, and onboarding.

5/ Content is the new customer acquisition channel.

Paid ads are getting expensive. Content marketing (done right) compounds over time and builds trust at scale.

6/ Community-led growth is replacing traditional sales.

The strongest companies are building communities where customers become advocates, support each other, and drive product development.

7/ Data privacy isn't just compliance—it's competitive advantage.

Users are increasingly conscious about their data. Privacy-first companies will win long-term trust and loyalty.

8/ Sustainability is becoming table stakes.

Gen Z and younger millennials factor environmental impact into purchase decisions. Green tech isn't just nice-to-have—it's essential.

What trends are you seeing in your industry? Drop your thoughts below 👇`,
      type: 'social',
      date: '2024-01-05',
      status: 'published',
      variant: 'gradient'
    },
    {
      id: 'content-planning-session',
      title: 'Q1 Content Calendar Planning',
      subtitle: 'Last edited 3 weeks ago',
      content: `# Q1 2024 Content Calendar Planning Session

## Session Overview
**Date**: January 3, 2024
**Participants**: Marketing Team, Product Team, Leadership
**Duration**: 2 hours
**Objective**: Plan comprehensive content strategy for Q1

## Content Themes by Month

### January: "New Beginnings"
- Focus on goal-setting and productivity
- Feature customer success stories from 2023
- Introduce new team members and company updates

### February: "Building Momentum"  
- Deep-dive into product features and use cases
- Educational content about industry trends
- Behind-the-scenes content showing company culture

### March: "Spring Growth"
- Preparation for Q2 product launches
- Thought leadership about future of industry
- Community building and user-generated content

## Content Types & Distribution

### Blog Content (2 posts/week)
- **Monday**: Industry insights and thought leadership
- **Thursday**: How-to guides and product tutorials

### Social Media (Daily)
- **LinkedIn**: Professional insights and company updates
- **Twitter**: Quick tips and industry commentary  
- **Instagram**: Behind-the-scenes and company culture

### Video Content (Weekly)
- **Product demos**: Feature walkthroughs and tutorials
- **Expert interviews**: Conversations with industry leaders
- **Company updates**: Monthly recap videos

## Key Performance Indicators
- **Blog Traffic**: 25% increase over Q4
- **Social Engagement**: 40% improvement in engagement rate
- **Lead Generation**: 30% increase in content-driven leads
- **Brand Awareness**: 20% lift in unaided brand recognition

## Resource Allocation
- **Content Creation**: 60% of marketing budget
- **Distribution & Promotion**: 30% of marketing budget  
- **Tools & Technology**: 10% of marketing budget

## Action Items
1. **Week 1**: Finalize editorial calendar with specific topics
2. **Week 2**: Create content brief templates and style guide
3. **Week 3**: Set up tracking and analytics dashboards
4. **Week 4**: Launch Q1 content production

## Success Metrics Review
Monthly reviews on the 15th to assess:
- Content performance against KPIs
- Audience engagement and feedback
- Competitive landscape changes
- Adjustments needed for remaining quarter

---
*Next planning session scheduled for March 15th to prepare Q2 content strategy*`,
      type: 'meeting',
      date: '2024-01-03',
      status: 'completed',
      variant: 'image'
    }
  ];

  // Filter tabs configuration
  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'social', label: 'Social' },
    { id: 'blog', label: 'Blog' },
    { id: 'template', label: 'Templates' },
    { id: 'research', label: 'Research' },
    { id: 'meeting', label: 'Meetings' },
  ];

  // Sort dropdown options  
  const sortOptions = [
    { label: 'Last Edited', onClick: () => setSortBy('lastEdited') },
    { label: 'Newest First', onClick: () => setSortBy('newest') },
    { label: 'Oldest First', onClick: () => setSortBy('oldest') },
    { label: 'A-Z', onClick: () => setSortBy('nameAsc') },
    { label: 'Z-A', onClick: () => setSortBy('nameDesc') },
  ];

  // Filter and sort items
  const getFilteredAndSortedItems = () => {
    let filtered = historyItems.filter(item => {
      // Filter by tab
      const matchesTab = activeTab === 'all' || item.type === activeTab;
      
      // Filter by search  
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase());
        
      return matchesTab && matchesSearch;
    });

    // Sort items
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'nameAsc':
          return a.title.localeCompare(b.title);
        case 'nameDesc':
          return b.title.localeCompare(a.title);
        case 'lastEdited':
        default:
          // For demo, use the order they appear (most recent edits first)
          return 0;
      }
    });

    return filtered;
  };

  const filteredItems = getFilteredAndSortedItems();

  // Handle menu actions for ContentCard
  const handleMenuAction = (action, itemId) => {
    console.log(`Action: ${action} on item: ${itemId}`);
    // Handle delete, move, etc.
  };

  // Main container styles - following established pattern
  const containerStyles = {
    paddingTop: spacing.spacing[80],
    paddingBottom: spacing.spacing[160],
    paddingLeft: spacing.spacing[32],
    paddingRight: spacing.spacing[32],
    width: '840px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spacing[24],
  };

  // Title style using awesome serif font, 4xl semi bold
  const titleStyle = {
    fontFamily: typography.fontFamily['awesome-serif'],
    fontSize: typography.desktop.size['4xl'],
    fontWeight: typography.desktop.weight.semibold,
    lineHeight: typography.desktop.lineHeight.leading7,
    letterSpacing: typography.desktop.letterSpacing.normal,
    color: colors.text.default,
    margin: 0,
  };

  // Subtitle style - sm medium, text subtle
  const subtitleStyle = {
    ...textStyles.sm.medium,
    color: colors.text.subtle,
    margin: 0,
    marginTop: spacing.spacing[8],
  };

  // Controls row styles for tabs and search
  const controlRowStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.spacing[24],
    width: '100%',
  };

  // Right section styles for search and dropdown
  const rightSectionStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spacing[12],
  };

  // Content grid styles (2 columns)
  const contentGridStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: spacing.spacing[24],
  };

  return (
    <div style={containerStyles}>
      {/* Header Section */}
      <div>
        <h1 style={titleStyle}>Content History</h1>
        <p style={subtitleStyle}>
          View, search, and manage all your created content in one place
        </p>
      </div>

      {/* Controls Row - Tabs and Search/Sort */}
      <div style={controlRowStyles}>
        {/* Left: Tab Bar */}
        <Tabs
          style="segmented"
          type="default"
          tabs={filterTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Right: Search and Sort */}
        <div style={rightSectionStyles}>
          {/* Search Input */}
          <div style={{ width: '280px' }}>
            <Input
              size="lg"
              style="default"
              placeholder="Search content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leadIcon={<Search size={16} />}
            />
          </div>

          {/* Sort Dropdown */}
          <div style={{ position: 'relative' }}>
            <Button
              label={`${sortOptions.find(opt => 
                (sortBy === 'lastEdited' && opt.label === 'Last Edited') ||
                (sortBy === 'newest' && opt.label === 'Newest First') ||
                (sortBy === 'oldest' && opt.label === 'Oldest First') ||
                (sortBy === 'nameAsc' && opt.label === 'A-Z') ||
                (sortBy === 'nameDesc' && opt.label === 'Z-A')
              )?.label || 'Last Edited'}`}
              style="secondary"
              size="sm"
              tailIcon={<ChevronDown size={12} />}
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            />
            
            {showSortDropdown && (
              <DropdownMenu
                items={sortOptions}
                onClose={() => setShowSortDropdown(false)}
                style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  marginTop: spacing.spacing[4],
                  zIndex: 10
                }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div style={{ 
        ...textStyles.sm.medium, 
        color: colors.text.subtle 
      }}>
        {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
      </div>

      {/* Content Cards Grid */}
      <div style={contentGridStyles}>
        {filteredItems.map((item) => (
          <ContentCard
            key={item.id}
            variant={item.variant}
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
            onClick={() => navigateToContentEditor(item.id)}
            onMenuAction={(action) => handleMenuAction(action, item.id)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: spacing.spacing[48],
          color: colors.text.subtle
        }}>
          <p style={textStyles.lg.medium}>No content found</p>
          <p style={textStyles.sm.normal}>
            {searchQuery ? 'Try adjusting your search terms' : 'Start creating content to see your history here'}
          </p>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
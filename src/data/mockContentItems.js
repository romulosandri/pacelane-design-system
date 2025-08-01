/**
 * Mock Content Items Data
 * Sample content data for development and demonstration purposes
 */

export const mockContentItems = [
  {
    id: 'marketing-strategy',
    title: 'Marketing Strategy',
    subtitle: 'Last edited 2 hours ago',
    content: `# Marketing Strategy for Q4 2024

## Overview
Our marketing strategy for Q4 focuses on increasing brand awareness and driving conversions through targeted digital campaigns.

## Key Objectives
1. Increase social media engagement by 40%
2. Launch new product campaign
3. Optimize conversion funnel
4. Expand into new market segments

## Target Audiences
- Primary: Tech professionals aged 25-40
- Secondary: Small business owners
- Tertiary: Enterprise decision makers

## Campaign Channels
- LinkedIn targeted advertising
- Google Ads for high-intent keywords
- Content marketing through blog posts
- Email marketing to existing subscribers

## Budget Allocation
- Paid advertising: 60%
- Content creation: 25%
- Tools and technology: 15%

## Success Metrics
- Lead generation: 25% increase
- Cost per acquisition: 20% reduction
- Brand awareness: 30% improvement
- Customer lifetime value: 15% increase

## Timeline
- Week 1-2: Campaign setup and content creation
- Week 3-8: Active campaign execution
- Week 9-12: Optimization and scaling

## Next Steps
1. Finalize creative assets
2. Set up tracking and analytics
3. Launch pilot campaigns
4. Monitor performance and iterate`,
    variant: 'gradient',
    lastModified: new Date(Date.now() - 2 * 60 * 60 * 1000) // 2 hours ago
  },
  {
    id: 'design-system',
    title: 'Design System',
    subtitle: 'Last edited yesterday',
    content: `# Design System Documentation

## Introduction
Our design system provides a comprehensive set of design tokens, components, and guidelines to ensure consistency across all our digital products.

## Design Tokens
### Colors
- Primary: Blue scale from 50-950
- Semantic: Success (green), warning (orange), error (red)
- Neutral: Gray scale with transparency variants

### Typography
- Headings: Inter font family
- Body text: Inter font family
- Code: JetBrains Mono
- Quotes: Fraunces serif

### Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96...

## Components
### Button Component
- 7 styles: primary, secondary, dashed, soft, ghost, ghostMuted, destructive
- 5 sizes: 2xs, xs, sm, md, lg
- States: default, hover, active, disabled, loading

### Input Component
- Multiple variants and sizes
- Support for icons and validation states
- Accessible by default

### Cards
- Content cards for different content types
- Template cards for starting new projects
- Stats and summary cards for dashboards

## Usage Guidelines
1. Always use design tokens instead of hardcoded values
2. Follow the component patterns and props
3. Ensure accessibility in all implementations
4. Test in both light and dark themes

## Implementation
The design system is built with React and uses CSS-in-JS for styling. All components are theme-aware and work seamlessly with our theming system.`,
    variant: 'image',
    lastModified: new Date(Date.now() - 24 * 60 * 60 * 1000) // 1 day ago
  },
  {
    id: 'user-research',
    title: 'User Research',
    subtitle: 'Last edited 3 days ago',
    content: `# User Research Report - Q3 2024

## Executive Summary
Our Q3 user research initiative involved 150+ participants across multiple studies to understand user behavior, pain points, and opportunities for product improvement.

## Research Methods
### Quantitative Research
- User analytics from 10,000+ monthly active users
- A/B testing on key user flows
- Survey responses from 500+ users

### Qualitative Research
- 25 in-depth user interviews
- 15 usability testing sessions
- 5 focus groups with different user segments

## Key Findings
### Pain Points
1. **Navigation Complexity**: 68% of users struggled with finding specific features
2. **Information Overload**: Dashboard showed too much information at once
3. **Mobile Experience**: 45% of mobile users reported difficulty with touch targets

### Positive Feedback
1. **Design Quality**: 89% rated the visual design as excellent
2. **Performance**: Fast loading times were consistently praised
3. **Accessibility**: Screen reader users found the app very usable

## User Personas
### Primary Persona: Sarah the Content Creator
- Age: 28-35
- Needs: Quick content creation, collaboration tools
- Pain points: Complex workflows, limited templates

### Secondary Persona: Mike the Manager
- Age: 35-45
- Needs: Team oversight, progress tracking
- Pain points: Lack of reporting features

## Recommendations
1. Simplify main navigation structure
2. Redesign dashboard with progressive disclosure
3. Improve mobile touch targets (minimum 44px)
4. Add more content templates
5. Implement better team collaboration features

## Next Steps
- Prototype new navigation structure
- Conduct usability testing on dashboard redesign
- Plan mobile UX improvements for next quarter`,
    variant: 'gradient',
    lastModified: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 days ago
  },
  {
    id: 'product-roadmap',
    title: 'Product Roadmap',
    subtitle: 'Last edited 1 week ago',
    content: `# Product Roadmap 2024-2025

## Vision
Build the most intuitive and powerful content creation platform for modern teams.

## Q4 2024 Priorities
### Major Features
1. **Advanced Editor** - Rich text editing with collaborative features
2. **AI Integration** - Smart content suggestions and generation
3. **Template Gallery** - Expanded library of professional templates
4. **Team Workspaces** - Enhanced collaboration and sharing

### Technical Improvements
- Performance optimization for large documents
- Enhanced mobile experience
- Improved accessibility features
- API rate limiting and security enhancements

## Q1 2025 Goals
### New Capabilities
1. **Analytics Dashboard** - Content performance insights
2. **Integration Platform** - Connect with popular tools
3. **Advanced Permissions** - Granular access control
4. **Version History** - Track changes and restore previous versions

### Platform Evolution
- Multi-language support
- Enterprise SSO integration
- Advanced export options
- Workflow automation

## Q2 2025 Vision
### Innovation Focus
1. **AI-Powered Insights** - Predictive content recommendations
2. **Voice Integration** - Dictation and voice commands
3. **Real-time Collaboration** - Google Docs-style editing
4. **Smart Templates** - Dynamic templates that adapt to content

## Success Metrics
- User engagement: 30% increase
- Content creation speed: 50% improvement
- Customer satisfaction: 4.5+ rating
- Team adoption: 80% of paid accounts using collaboration features

## Resource Allocation
- Engineering: 60%
- Design: 20%
- Product Management: 10%
- QA/Testing: 10%

The roadmap will be reviewed quarterly and adjusted based on user feedback, market conditions, and technical constraints.`,
    variant: 'image',
    lastModified: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1 week ago
  },
  {
    id: 'team-meeting-notes',
    title: 'Team Meeting Notes',
    subtitle: 'Last edited 2 weeks ago',
    content: `# Weekly Team Meeting - October 15, 2024

## Attendees
- Sarah Johnson (Product Manager)
- Mike Chen (Engineering Lead)
- Lisa Rodriguez (Design Lead)
- Alex Kim (Marketing)
- Tom Wilson (Customer Success)

## Agenda Items

### 1. Product Updates
**Presenter:** Sarah Johnson

- New feature releases performed well with 15% increase in user engagement
- Customer feedback on recent UI changes has been overwhelmingly positive
- Planning Q4 feature prioritization workshop for next week

**Action Items:**
- Sarah to schedule Q4 planning workshop
- Mike to provide technical feasibility assessment for proposed features

### 2. Engineering Report
**Presenter:** Mike Chen

- Infrastructure migration to new servers completed successfully
- Performance improvements showing 25% faster load times
- Working on accessibility improvements for screen readers

**Blockers:**
- Waiting for design specifications for new components
- Need product requirements for API rate limiting

**Action Items:**
- Lisa to provide component specs by Friday
- Sarah to draft API requirements document

### 3. Design Updates
**Presenter:** Lisa Rodriguez

- User research findings reveal need for simplified navigation
- New design system components ready for development
- Mobile experience improvements in progress

**Next Steps:**
- Conduct usability testing on new navigation prototype
- Finalize mobile design specifications
- Create design guidelines documentation

### 4. Marketing Initiatives
**Presenter:** Alex Kim

- Q3 campaign exceeded goals with 120% of target leads generated
- Planning Q4 holiday campaign with focus on team collaboration features
- Customer case studies showing strong ROI stories

**Upcoming:**
- Launch product update announcement next week
- Participate in industry conference in November
- Plan year-end customer appreciation event

### 5. Customer Success Report
**Presenter:** Tom Wilson

- Customer satisfaction scores at all-time high (4.7/5)
- Three new enterprise customers onboarded this month
- Common support requests trending toward integration needs

**Focus Areas:**
- Develop better onboarding materials for enterprise customers
- Create integration tutorials and documentation
- Plan customer advisory board meeting

## Key Decisions Made
1. Proceed with simplified navigation design for Q4 release
2. Prioritize API improvements to support customer integrations
3. Allocate additional resources to mobile experience improvements
4. Schedule monthly customer advisory board meetings starting in November

## Follow-up Meeting
Next meeting scheduled for October 22, 2024 at 2:00 PM EST.`,
    variant: 'gradient',
    lastModified: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) // 2 weeks ago
  },
  {
    id: 'competitive-analysis',
    title: 'Competitive Analysis',
    subtitle: 'Last edited 1 month ago',
    content: `# Competitive Analysis Report

## Executive Summary
This analysis examines our top 5 competitors in the content creation and collaboration space, identifying strengths, weaknesses, and opportunities for differentiation.

## Competitive Landscape

### Direct Competitors

#### 1. Notion
**Strengths:**
- Powerful block-based editor
- Strong database functionality
- Active community and template sharing
- Excellent API and integrations

**Weaknesses:**
- Steep learning curve for new users
- Can become complex for simple use cases
- Performance issues with large databases
- Limited real-time collaboration features

**Market Position:** Premium productivity platform
**Pricing:** Freemium model, $8-16/user/month for teams

#### 2. Airtable
**Strengths:**
- Intuitive spreadsheet-database hybrid
- Excellent visualization options
- Strong automation capabilities
- Good mobile experience

**Weaknesses:**
- Limited text editing capabilities
- Can become expensive for larger teams
- Complex pricing structure
- Limited offline functionality

**Market Position:** Database-first collaboration tool
**Pricing:** $20-45/user/month for business features

#### 3. Monday.com
**Strengths:**
- Visual project management interface
- Strong workflow automation
- Good team collaboration features
- Comprehensive reporting

**Weaknesses:**
- Primarily project management focused
- Limited content creation capabilities
- Can feel overwhelming for simple tasks
- Higher price point

**Market Position:** Work management platform
**Pricing:** $8-16/user/month base, higher for advanced features

### Emerging Competitors

#### 4. Coda
**Strengths:**
- Document-database hybrid approach
- Powerful formula system
- Good collaboration features
- Growing template marketplace

**Weaknesses:**
- Smaller user base and community
- Learning curve for advanced features
- Limited mobile functionality
- Performance issues with complex docs

#### 5. ClickUp
**Strengths:**
- All-in-one workspace approach
- Extensive customization options
- Competitive pricing
- Regular feature updates

**Weaknesses:**
- Interface can feel cluttered
- Feature overload can confuse users
- Inconsistent user experience
- Customer support challenges

## Competitive Positioning

### Our Advantages
1. **Simplicity Focus:** Easier to learn and use than complex alternatives
2. **Design Quality:** Superior visual design and user experience
3. **Performance:** Faster loading and more responsive interface
4. **Content-First:** Optimized specifically for content creation workflows

### Areas for Improvement
1. **Database Functionality:** Need more structured data features
2. **Automation:** Lag behind in workflow automation capabilities
3. **Integrations:** Fewer third-party connections available
4. **Templates:** Smaller template library compared to established players

## Strategic Recommendations

### Short-term (0-6 months)
1. Expand template library with high-quality, professional templates
2. Improve integration capabilities with popular business tools
3. Add basic database and table functionality
4. Enhance mobile experience to match or exceed competitors

### Medium-term (6-18 months)
1. Develop workflow automation features
2. Create marketplace for user-generated templates
3. Add advanced collaboration features (comments, suggestions, version history)
4. Implement enterprise-grade security and compliance features

### Long-term (18+ months)
1. Build comprehensive API platform
2. Develop AI-powered content assistance
3. Create industry-specific solutions
4. Expand into adjacent markets (project management, CRM)

## Market Opportunities
- **Underserved Segments:** Small creative teams, freelancers, consultants
- **Geographic Expansion:** European and Asian markets showing growth
- **Vertical Focus:** Education, non-profits, and healthcare sectors
- **Integration Partnerships:** Opportunity to become preferred content layer for other tools

## Conclusion
While we face strong competition from established players, our focus on simplicity, design quality, and content creation workflows provides a clear differentiation opportunity. Success will depend on execution of strategic initiatives while maintaining our core strengths.`,
    variant: 'image',
    lastModified: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // 1 month ago
  }
];
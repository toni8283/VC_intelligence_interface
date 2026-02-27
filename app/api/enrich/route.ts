import { NextRequest, NextResponse } from 'next/server';

// Mock enrichment function - replace with real Firecrawl API calls
async function enrichCompany(website: string, companyName: string) {
  try {
    // In production, use Firecrawl API or similar
    // This is a mock implementation to demonstrate the pattern
    
    const sources = [
      { url: `${website}`, timestamp: Date.now() },
      { url: `${website}/about`, timestamp: Date.now() },
      { url: `${website}/blog`, timestamp: Date.now() },
    ];

    // Simulate a slight delay for realism
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      summary: `${companyName} is a technology company that provides innovative solutions in their market. They have a strong product-market fit and are actively growing their team.`,
      whatTheyDo: [
        'Provides core platform services',
        'Serves enterprise and mid-market customers',
        'Invests heavily in R&D',
        'Maintains active developer community',
        'Offers comprehensive API and integrations',
      ],
      keywords: [
        'SaaS',
        'Developer Tools',
        'Infrastructure',
        'Cloud Platform',
        'Enterprise',
      ],
      signals: [
        'Active blog with recent posts',
        'Careers page indicates hiring growth',
        'Changelog shows regular product updates',
        'Strong developer documentation',
      ],
      sources,
    };
  } catch (error) {
    throw new Error(`Enrichment failed: ${error}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { website, companyName } = await request.json();

    if (!website || !companyName) {
      return NextResponse.json(
        { error: 'Missing website or companyName' },
        { status: 400 }
      );
    }

    // Server-side: API key would be accessed here if needed
    // Never expose the key to the client
    const enrichmentData = await enrichCompany(website, companyName);

    return NextResponse.json(enrichmentData, { status: 200 });
  } catch (error) {
    console.error('Enrichment error:', error);
    return NextResponse.json(
      { error: 'Failed to enrich company' },
      { status: 500 }
    );
  }
}

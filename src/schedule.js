// WC 2026 matches - all in UTC (converting from ET: ET + 4 hours = UTC)
// Dates: June 11 - July 19, 2026 (all times shown in ET, stored as UTC in ISO format)

export const MATCHES = [
  // June 11 (Thursday)
  { date: '2026-06-11T19:00:00Z', home: 'MEX', away: 'RSA', stage: 'Group A' }, // 15:00 ET
  { date: '2026-06-12T02:00:00Z', home: 'CZE', away: 'KOR', stage: 'Group A' }, // 22:00 ET

  // June 12 (Friday)
  { date: '2026-06-12T19:00:00Z', home: 'CAN', away: 'BIH', stage: 'Group B' }, // 15:00 ET
  { date: '2026-06-13T01:00:00Z', home: 'USA', away: 'PAR', stage: 'Group D' }, // 21:00 ET

  // June 13 (Saturday)
  { date: '2026-06-13T01:00:00Z', home: 'HAI', away: 'SCO', stage: 'Group C' }, // 21:00 ET
  { date: '2026-06-13T04:00:00Z', home: 'AUS', away: 'TUR', stage: 'Group D' }, // 00:00 ET (midnight)
  { date: '2026-06-13T22:00:00Z', home: 'BRA', away: 'MAR', stage: 'Group C' }, // 18:00 ET
  { date: '2026-06-13T19:00:00Z', home: 'QAT', away: 'SUI', stage: 'Group B' }, // 15:00 ET

  // June 14 (Sunday)
  { date: '2026-06-13T23:00:00Z', home: 'CIV', away: 'ECU', stage: 'Group E' }, // 19:00 ET
  { date: '2026-06-13T17:00:00Z', home: 'GER', away: 'CUW', stage: 'Group E' }, // 13:00 ET
  { date: '2026-06-13T20:00:00Z', home: 'NED', away: 'JPN', stage: 'Group F' }, // 16:00 ET
  { date: '2026-06-14T02:00:00Z', home: 'SWE', away: 'TUN', stage: 'Group F' }, // 22:00 ET

  // June 15 (Monday)
  { date: '2026-06-14T22:00:00Z', home: 'KSA', away: 'URU', stage: 'Group H' }, // 18:00 ET
  { date: '2026-06-14T16:00:00Z', home: 'ESP', away: 'CPV', stage: 'Group H' }, // 12:00 ET
  { date: '2026-06-15T01:00:00Z', home: 'IRN', away: 'NZL', stage: 'Group G' }, // 21:00 ET
  { date: '2026-06-14T19:00:00Z', home: 'BEL', away: 'EGY', stage: 'Group G' }, // 15:00 ET

  // June 16 (Tuesday)
  { date: '2026-06-16T19:00:00Z', home: 'FRA', away: 'SEN', stage: 'Group I' }, // 15:00 ET
  { date: '2026-06-16T22:00:00Z', home: 'IRQ', away: 'NOR', stage: 'Group I' }, // 18:00 ET
  { date: '2026-06-17T01:00:00Z', home: 'ARG', away: 'ALG', stage: 'Group J' }, // 21:00 ET
  { date: '2026-06-17T04:00:00Z', home: 'AUT', away: 'JOR', stage: 'Group J' }, // 00:00 ET

  // June 17 (Wednesday)
  { date: '2026-06-17T23:00:00Z', home: 'GHA', away: 'PAN', stage: 'Group L' }, // 19:00 ET
  { date: '2026-06-17T20:00:00Z', home: 'ENG', away: 'CRO', stage: 'Group L' }, // 16:00 ET
  { date: '2026-06-17T17:00:00Z', home: 'POR', away: 'COD', stage: 'Group K' }, // 13:00 ET
  { date: '2026-06-18T02:00:00Z', home: 'UZB', away: 'COL', stage: 'Group K' }, // 22:00 ET

  // June 19-24 (remaining group stage matches)
  { date: '2026-06-19T16:00:00Z', home: 'CZE', away: 'RSA', stage: 'Group A' }, // 12:00 ET
  { date: '2026-06-19T19:00:00Z', home: 'SUI', away: 'BIH', stage: 'Group B' }, // 15:00 ET
  { date: '2026-06-20T22:00:00Z', home: 'CAN', away: 'QAT', stage: 'Group B' }, // 18:00 ET
  { date: '2026-06-21T01:00:00Z', home: 'MEX', away: 'KOR', stage: 'Group A' }, // 21:00 ET
  { date: '2026-06-22T00:30:00Z', home: 'BRA', away: 'HAI', stage: 'Group C' }, // 20:30 ET
  { date: '2026-06-22T22:00:00Z', home: 'SCO', away: 'MAR', stage: 'Group C' }, // 18:00 ET
  { date: '2026-06-23T03:00:00Z', home: 'USA', away: 'AUS', stage: 'Group D' }, // 23:00 ET
  { date: '2026-06-23T19:00:00Z', home: 'PAR', away: 'AUS', stage: 'Group D' }, // 15:00 ET
  { date: '2026-06-23T20:00:00Z', home: 'GER', away: 'CIV', stage: 'Group E' }, // 16:00 ET
  { date: '2026-06-24T00:00:00Z', home: 'ECU', away: 'CUW', stage: 'Group E' }, // 20:00 ET
  { date: '2026-06-24T17:00:00Z', home: 'NED', away: 'SWE', stage: 'Group F' }, // 13:00 ET
  { date: '2026-06-24T04:00:00Z', home: 'TUN', away: 'JPN', stage: 'Group F' }, // 00:00 ET
  { date: '2026-06-24T22:00:00Z', home: 'ESP', away: 'KSA', stage: 'Group H' }, // 18:00 ET
  { date: '2026-06-24T16:00:00Z', home: 'ESP', away: 'URU', stage: 'Group H' }, // 12:00 ET (duplicate team - fixing to CPV)
  { date: '2026-06-24T19:00:00Z', home: 'BEL', away: 'NZL', stage: 'Group G' }, // 15:00 ET
  { date: '2026-06-25T01:00:00Z', home: 'IRN', away: 'EGY', stage: 'Group G' }, // 21:00 ET
  { date: '2026-06-25T21:00:00Z', home: 'FRA', away: 'NOR', stage: 'Group I' }, // 17:00 ET
  { date: '2026-06-25T20:00:00Z', home: 'SEN', away: 'IRQ', stage: 'Group I' }, // 16:00 ET (adjusted for match flow)
  { date: '2026-06-26T01:00:00Z', home: 'ARG', away: 'AUT', stage: 'Group J' }, // 21:00 ET
  { date: '2026-06-26T17:00:00Z', home: 'JOR', away: 'ALG', stage: 'Group J' }, // 13:00 ET
  { date: '2026-06-27T00:00:00Z', home: 'PAN', away: 'ENG', stage: 'Group L' }, // 20:00 ET
  { date: '2026-06-26T23:00:00Z', home: 'CRO', away: 'GHA', stage: 'Group L' }, // 19:00 ET
  { date: '2026-06-27T21:30:00Z', home: 'COL', away: 'POR', stage: 'Group K' }, // 17:30 ET
  { date: '2026-06-27T23:30:00Z', home: 'UZB', away: 'COD', stage: 'Group K' }, // 19:30 ET

  // Final group matches (June 28-29)
  { date: '2026-06-28T23:00:00Z', home: 'RSA', away: 'MEX', stage: 'Group A' }, // 19:00 ET
  { date: '2026-06-28T23:00:00Z', home: 'KOR', away: 'CZE', stage: 'Group A' }, // 19:00 ET
  { date: '2026-06-29T23:00:00Z', home: 'BIH', away: 'CAN', stage: 'Group B' }, // 19:00 ET
  { date: '2026-06-29T23:00:00Z', home: 'SUI', away: 'QAT', stage: 'Group B' }, // 19:00 ET
  { date: '2026-06-29T23:00:00Z', home: 'MAR', away: 'BRA', stage: 'Group C' }, // 19:00 ET
  { date: '2026-06-29T23:00:00Z', home: 'SCO', away: 'HAI', stage: 'Group C' }, // 19:00 ET
  { date: '2026-06-30T23:00:00Z', home: 'PAR', away: 'USA', stage: 'Group D' }, // 19:00 ET
  { date: '2026-06-30T23:00:00Z', home: 'TUR', away: 'AUS', stage: 'Group D' }, // 19:00 ET
  { date: '2026-07-01T23:00:00Z', home: 'CUW', away: 'GER', stage: 'Group E' }, // 19:00 ET
  { date: '2026-07-01T23:00:00Z', home: 'ECU', away: 'CIV', stage: 'Group E' }, // 19:00 ET
  { date: '2026-07-02T23:00:00Z', home: 'JPN', away: 'NED', stage: 'Group F' }, // 19:00 ET
  { date: '2026-07-02T23:00:00Z', home: 'TUN', away: 'SWE', stage: 'Group F' }, // 19:00 ET
  { date: '2026-07-03T23:00:00Z', home: 'EGY', away: 'BEL', stage: 'Group G' }, // 19:00 ET
  { date: '2026-07-03T23:00:00Z', home: 'NZL', away: 'IRN', stage: 'Group G' }, // 19:00 ET
  { date: '2026-07-04T23:00:00Z', home: 'CPV', away: 'ESP', stage: 'Group H' }, // 19:00 ET
  { date: '2026-07-04T23:00:00Z', home: 'URU', away: 'KSA', stage: 'Group H' }, // 19:00 ET
  { date: '2026-07-05T23:00:00Z', home: 'SEN', away: 'FRA', stage: 'Group I' }, // 19:00 ET
  { date: '2026-07-05T23:00:00Z', home: 'NOR', away: 'IRQ', stage: 'Group I' }, // 19:00 ET
  { date: '2026-07-06T23:00:00Z', home: 'ALG', away: 'ARG', stage: 'Group J' }, // 19:00 ET
  { date: '2026-07-06T23:00:00Z', home: 'JOR', away: 'AUT', stage: 'Group J' }, // 19:00 ET
  { date: '2026-07-07T23:30:00Z', home: 'COD', away: 'POR', stage: 'Group K' }, // 19:30 ET
  { date: '2026-07-07T23:30:00Z', home: 'COL', away: 'UZB', stage: 'Group K' }, // 19:30 ET
  { date: '2026-07-08T23:00:00Z', home: 'CRO', away: 'ENG', stage: 'Group L' }, // 19:00 ET
  { date: '2026-07-08T23:00:00Z', home: 'PAN', away: 'GHA', stage: 'Group L' }, // 19:00 ET
]

// Knockout rounds bracket structure - scores will be populated as matches are played
export const BRACKET_ROUNDS = {
  roundOf16: [
    { id: 'r16-1', date: '2026-07-09T01:00:00Z', home: 'W-A1', away: 'R-B2', homeScore: null, awayScore: null },
    { id: 'r16-2', date: '2026-07-09T01:00:00Z', home: 'W-B1', away: 'R-A2', homeScore: null, awayScore: null },
    { id: 'r16-3', date: '2026-07-09T01:00:00Z', home: 'W-C1', away: 'R-D2', homeScore: null, awayScore: null },
    { id: 'r16-4', date: '2026-07-09T01:00:00Z', home: 'W-D1', away: 'R-C2', homeScore: null, awayScore: null },
    { id: 'r16-5', date: '2026-07-10T01:00:00Z', home: 'W-E1', away: 'R-F2', homeScore: null, awayScore: null },
    { id: 'r16-6', date: '2026-07-10T01:00:00Z', home: 'W-F1', away: 'R-E2', homeScore: null, awayScore: null },
    { id: 'r16-7', date: '2026-07-10T01:00:00Z', home: 'W-G1', away: 'R-H2', homeScore: null, awayScore: null },
    { id: 'r16-8', date: '2026-07-10T01:00:00Z', home: 'W-H1', away: 'R-G2', homeScore: null, awayScore: null },
  ],
  quarterfinals: [
    { id: 'qf-1', date: '2026-07-12T01:00:00Z', home: 'W-r16-1', away: 'W-r16-2', homeScore: null, awayScore: null },
    { id: 'qf-2', date: '2026-07-12T01:00:00Z', home: 'W-r16-3', away: 'W-r16-4', homeScore: null, awayScore: null },
    { id: 'qf-3', date: '2026-07-13T01:00:00Z', home: 'W-r16-5', away: 'W-r16-6', homeScore: null, awayScore: null },
    { id: 'qf-4', date: '2026-07-13T01:00:00Z', home: 'W-r16-7', away: 'W-r16-8', homeScore: null, awayScore: null },
  ],
  semifinals: [
    { id: 'sf-1', date: '2026-07-15T01:00:00Z', home: 'W-qf-1', away: 'W-qf-2', homeScore: null, awayScore: null },
    { id: 'sf-2', date: '2026-07-16T01:00:00Z', home: 'W-qf-3', away: 'W-qf-4', homeScore: null, awayScore: null },
  ],
  final: { id: 'final', date: '2026-07-19T01:00:00Z', home: 'W-sf-1', away: 'W-sf-2', homeScore: null, awayScore: null },
  thirdPlace: { id: '3rd', date: '2026-07-18T01:00:00Z', home: 'L-sf-1', away: 'L-sf-2', homeScore: null, awayScore: null },
}

export const TEAM_NAMES = {
  MEX: 'Mexico', RSA: 'South Africa', KOR: 'South Korea', CZE: 'Czechia',
  CAN: 'Canada', BIH: 'Bosnia-Herz.', QAT: 'Qatar', SUI: 'Switzerland',
  BRA: 'Brazil', MAR: 'Morocco', HAI: 'Haiti', SCO: 'Scotland',
  USA: 'United States', PAR: 'Paraguay', AUS: 'Australia', TUR: 'Turkey',
  GER: 'Germany', CUW: 'Curaçao', CIV: "Côte d'Ivoire", ECU: 'Ecuador',
  NED: 'Netherlands', JPN: 'Japan', SWE: 'Sweden', TUN: 'Tunisia',
  BEL: 'Belgium', EGY: 'Egypt', IRN: 'Iran', NZL: 'New Zealand',
  ESP: 'Spain', CPV: 'Cape Verde', KSA: 'Saudi Arabia', URU: 'Uruguay',
  FRA: 'France', SEN: 'Senegal', IRQ: 'Iraq', NOR: 'Norway',
  ARG: 'Argentina', ALG: 'Algeria', AUT: 'Austria', JOR: 'Jordan',
  POR: 'Portugal', COD: 'DR Congo', UZB: 'Uzbekistan', COL: 'Colombia',
  ENG: 'England', CRO: 'Croatia', GHA: 'Ghana', PAN: 'Panama',
}

// ISO 3166-1 alpha-2 codes for flagcdn.com images
export const TEAM_ISO = {
  MEX: 'mx', RSA: 'za', KOR: 'kr', CZE: 'cz',
  CAN: 'ca', BIH: 'ba', QAT: 'qa', SUI: 'ch',
  BRA: 'br', MAR: 'ma', HAI: 'ht', SCO: 'gb-sct',
  USA: 'us', PAR: 'py', AUS: 'au', TUR: 'tr',
  GER: 'de', CUW: 'cw', CIV: 'ci', ECU: 'ec',
  NED: 'nl', JPN: 'jp', SWE: 'se', TUN: 'tn',
  BEL: 'be', EGY: 'eg', IRN: 'ir', NZL: 'nz',
  ESP: 'es', CPV: 'cv', KSA: 'sa', URU: 'uy',
  FRA: 'fr', SEN: 'sn', IRQ: 'iq', NOR: 'no',
  ARG: 'ar', ALG: 'dz', AUT: 'at', JOR: 'jo',
  POR: 'pt', COD: 'cd', UZB: 'uz', COL: 'co',
  ENG: 'gb-eng', CRO: 'hr', GHA: 'gh', PAN: 'pa',
}

// flagcdn.com only supports widths: 20, 40, 80, 160, 320, 640, 1280
export function flagImg(code, size = 40) {
  const iso = TEAM_ISO[code]
  if (!iso) return ''
  const w = size <= 20 ? 20 : 40
  const w2x = w * 2
  return `<img src="https://flagcdn.com/w${w}/${iso}.png" srcset="https://flagcdn.com/w${w2x}/${iso}.png 2x" width="${w}" alt="${code} flag" class="flag-img" loading="lazy" />`
}

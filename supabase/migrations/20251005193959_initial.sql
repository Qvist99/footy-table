create table leagues (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    country text not null,
    sync_endpoints jsonb not null, /* {actionName:{endpoints: string[], oneTimeSync???: boolean}} */
)

create table seasons (
    id uuid primary key default gen_random_uuid(),
    name text not null, /* Remove name maybe?? */
    league_id uuid references leagues(id) on delete cascade,
    start_date date not null,
    end_date date not null,
);

create table season_data(
    id uuid primary key default gen_random_uuid(),
    season_id uuid references seasons(id) on delete cascade,
    fixtures jsonb not null, /* map the match_events endpoint data to each fixture on sync */
    standings jsonb not null,/* Map the logos with abbrv endpoint to each team */

)
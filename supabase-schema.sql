-- =======================================================
-- TRUE SELF® — Supabase SQL Schema for Orders
-- Copiez et collez ce script dans : Supabase > SQL Editor > New query > Run
-- =======================================================

create table if not exists public.orders (
  id text primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  customer_name text not null,
  customer_phone text not null,
  customer_city text not null,
  customer_address text not null,
  customer_notes text,
  items jsonb not null default '[]'::jsonb,
  total_price numeric not null default 0,
  status text not null default 'New'
);

-- Index pour accélérer les requêtes d'affichage par date dans l'admin
create index if not exists idx_orders_created_at on public.orders (created_at desc);

-- Activer la sécurité au niveau des lignes (Row Level Security)
alter table public.orders enable row level security;

-- Créer une politique permettant à notre serveur backend d'insérer, lire et mettre à jour
create policy "Allow server full access to orders"
  on public.orders
  for all
  using (true)
  with check (true);

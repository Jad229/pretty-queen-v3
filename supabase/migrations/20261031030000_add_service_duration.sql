alter table services
  add column duration_minutes int;

update services
set duration_minutes = case name
  when 'Haircut' then 45
  when 'Haircut and shave' then 75
  else 60
end
where duration_minutes is null;

alter table services
  alter column duration_minutes set not null;

alter table services
  add constraint services_duration_minutes_check
  check (duration_minutes > 0);

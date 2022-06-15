--run through the psql shell
--to tun this main Exe Command: \i C:/Users/user/Documents/MiniProjects/SQLScripts/NewGenshinImpactSQL/MainExe.sql
CREATE DATABASE typeormdb;
\set ON_ERROR_STOP 1
begin;
    \c typeormdb
    \i C:/Users/user/Documents/MiniProjects/SQLScripts/NewGenshinImpactSQL/CreateAllTables.sql
    \i C:/Users/user/Documents/MiniProjects/SQLScripts/NewGenshinImpactSQL/InsertSideTableData.sql
    \i C:/Users/user/Documents/MiniProjects/SQLScripts/NewGenshinImpactSQL/CreateCharactersData.sql
    \i C:/Users/user/Documents/MiniProjects/SQLScripts/NewGenshinImpactSQL/CreateWeaponsData.sql
    \i C:/Users/user/Documents/MiniProjects/SQLScripts/NewGenshinImpactSQL/CreateViews.sql
commit;

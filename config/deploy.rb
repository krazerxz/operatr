require "yaml"
require "securerandom"
require "tmpdir"

set :application, "operatr"
set :pty, true
set :repo_url, "https://github.com/krazerxz/operatr.git"

set :deploy_to, "/apps/operatr"
set :tmp_dir, Dir.mktmpdir(fetch(:application), "/tmp")
SSHKit.config.umask = "0002"

set :linked_files, %w[config/secrets.yml config/database.yml config/puma.rb]
set :linked_dirs, %w[log]

set :bundle_flags, "--retry 10 --deployment"

set :rbenv_type, :system
set :rbenv_ruby, File.read(".ruby-version").strip
set :rbenv_path, "/apps/rbenv"
set :rbenv_prefix, "RBENV_ROOT=#{fetch(:rbenv_path)} RBENV_VERSION=#{fetch(:rbenv_ruby)} #{fetch(:rbenv_path)}/bin/rbenv exec"

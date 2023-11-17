webflow_static_download() {
  local project="$1"
  local dir="$2"
  if [ ! "$project" ] || [ ! "$dir" ]; then
   echo "Enter <webflow-project-id> <dit-to-save>"
   return;
  fi;

  if [ ! -d "$dir" ]; then
    mkdir -p "$dir";
  fi
  rm -r $dir/*
  wget \
     --execute robots=off \
     --no-cache \
     --recursive \
     --page-requisites \
     --convert-links \
     --no-parent \
     --span-hosts \
     --no-host-directories \
      -P "$dir" \
    https://$1.webflow.io
}
webflow_static_download $1 $2;
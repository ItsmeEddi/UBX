#!/bin/sh

node generateFiles.js

password=$(rclone obscure $1)

rclone sync --sftp-pass $password --config ./rclone.conf ./biotope-boilerplate/dist/resources vi-ubx:/var/chroots/ubx/var/www/vhosts/konferenz/resources

rclone copy --sftp-pass $password --config ./rclone.conf ./biotope-template.php vi-ubx:/var/chroots/ubx/var/www/vhosts/konferenz/wp-content/themes/ubxconference

rclone copy --sftp-pass $password --config ./rclone.conf ./privacy-template.php vi-ubx:/var/chroots/ubx/var/www/vhosts/konferenz/wp-content/themes/ubxconference

rclone copy --sftp-pass $password --config ./rclone.conf ./impress-template.php vi-ubx:/var/chroots/ubx/var/www/vhosts/konferenz/wp-content/themes/ubxconference


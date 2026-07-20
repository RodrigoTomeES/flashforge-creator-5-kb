---
title: "Network Setup"
source: https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/network-setup
scraped: 2026-07-20
---

> Official wiki page: https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/network-setup

The printer supports Wi-Fi and LAN connections. From the Home screen, go to ⚙️ > **Network** to open the Network Settings screen.

## Connect to a Wi-Fi Network [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/network-setup#connect-to-a-wi-fi-network)

Follow these steps to connect to a Wi-Fi network:

1.  Turn on Wi-Fi to scan for available networks.
2.  Select the desired Wi-Fi network.
3.  Enter the password if prompted.
4.  A green checkmark indicates a successful connection.  
    ![network-setup-01.png](https://wiki.flashforge.com/resource/pictures/%E4%B8%AD%E6%96%87/creator5/network-setup/network-setup-01.png)  
    Tap the connected network to view the assigned IP address.  
    ![network-setup-02.png](https://wiki.flashforge.com/resource/pictures/creator5_en/network-setup/network-setup-02.png)  
    Tap and hold the connected network to forget it.  
    ![network-setup-03.png](https://wiki.flashforge.com/resource/pictures/creator5_en/network-setup/network-setup-03.png)

> Switching to a new network clears the previous Wi-Fi password.

## Manual IP Configuration [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/network-setup#manual-ip-configuration)

The printer supports manually configuring a static IPv4 address to maintain a fixed network identity on the LAN, preventing connection drops caused by automatic IP address changes.

Follow these steps to configure a static IP:

1.  From the Home screen, go to ⚙️ > **Network** > **Static IP**.
2.  Enter the following parameters:
    -   **IP Address**: Enter a unique IPv4 address for the printer (must match your local subnet).
    -   **Subnet Mask**: The subnet mask of your local network (typically 255.255.255.0).
    -   **Gateway**: The IP address of your router.
    -   **DNS**: The DNS server address (public options like 8.8.8.8 or 114.114.114.114 can be used).
3.  Toggle on **Configure IPv4** to enable static IP mode. The entered settings will automatically save and take effect.  
    ![network-setup-04.png](https://wiki.flashforge.com/resource/pictures/creator5_en/network-setup/network-setup-04.png)

> Ensure the entered IP address is not in use by another device on your network to avoid IP conflicts.

> Toggling off "Configure IPv4" switches the printer to automatic DHCP mode. Saved static IP settings are retained and can be reused when toggled back on.

## LAN Only Mode [\[wiki §\]](https://wiki.flashforge.com/en/creator-series/creator-5-series/manual/network-setup#lan-only-mode)

LAN Only Mode limits printer discovery, access, and control to your local network. Internet connectivity and cloud services are disabled, and print files transfer exclusively over the LAN to ensure data privacy.

Follow these steps to enable LAN Only Mode and add the printer to Flash Studio Desktop:

1.  Ensure your computer and printer are on the same local network.

> If your printer is using its default name, we recommend renaming it under ⚙️ > **Basic Settings** > **Device Name**. Unique names prevent duplicate conflicts and help you locate the correct device quickly when multiple printers of the same model are on the network.

2.  From the Home screen, go to ⚙️ > **Network** > **LAN Only**. Toggle on **LAN Only Mode**.  
    ![network-setup-05.png](https://wiki.flashforge.com/resource/pictures/creator5_en/network-setup/network-setup-05.png)
3.  Note the **Device ID** displayed on the screen.
4.  In Flash Studio Desktop, click **Device** > **+**.
5.  The **Other Devices** section lists all visible printers on your network. Depending on their network settings, one of two icons will appear before the device name:  
    ![cloud-mode-icon.png](https://wiki.flashforge.com/resource/pictures/%E4%B8%AD%E6%96%87/creator5/network-setup/cloud-mode-icon.png)：Add this device via the internet (cloud).  
    ![lan-mode-icon.png](https://wiki.flashforge.com/resource/pictures/%E4%B8%AD%E6%96%87/creator5/network-setup/lan-mode-icon.png)：Add this device via LAN. LAN Only Mode is enabled, requiring a device verification code.  
    Select a device marked with ![lan-mode-icon.png](https://wiki.flashforge.com/resource/pictures/%E4%B8%AD%E6%96%87/creator5/network-setup/lan-mode-icon.png).  
    ![network-setup-06.png](https://wiki.flashforge.com/resource/pictures/creator5_en/network-setup/network-setup-06.png)
6.  Enter the previously noted device ID (the access code) in the prompt and click ✔️.  
    ![network-setup-07.png](https://wiki.flashforge.com/resource/pictures/creator5_en/network-setup/network-setup-07.png)
7.  Once connected, the printer will appear in the Device List.  
    ![network-setup-08.png](https://wiki.flashforge.com/resource/pictures/creator5_en/network-setup/network-setup-08.png)

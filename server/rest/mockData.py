GetRegionChildrenResponse = """<?xml version="1.0" encoding="utf-8"?>
<RegionChildren:regionchildren xsi:schemaLocation="http://www.zillow.com/static/xsd/RegionChildren.xsd https://www.zillowstatic.com/vstatic/b20c067/static/xsd/RegionChildren.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:RegionChildren="http://www.zillow.com/static/xsd/RegionChildren.xsd">
    <request>
        <state>md</state>
        <county>"Baltimore"</county>
        <childtype>city</childtype>
    </request>
    <message>
        <text>Request successfully processed</text>
        <code>0</code>
    </message>
    <response>
        <region>
            <id>2626</id>
            <latitude>39.458153</latitude>
            <longitude>-76.601906</longitude>
        </region>
        <subregiontype>city</subregiontype>
        <list>
            <count>3</count>
            <region>
                <id>11170</id>
                <name>Dundalk</name>
                <zindex currency="USD">125500</zindex>
                <url>http://www.zillow.com/local-info/MD-Dundalk/r_11170/</url>
                <latitude>39.260511</latitude>
                <longitude>-76.486107</longitude>
            </region>
            <region>
                <id>28948</id>
                <name>Owings Mills</name>
                <zindex currency="USD">226600</zindex>
                <url>http://www.zillow.com/local-info/MD-Owings-Mills/r_28948/</url>
                <latitude>39.436995</latitude>
                <longitude>-76.780392</longitude>
            </region>
            <region>
                <id>44490</id>
                <name>Catonsville</name>
                <zindex currency="USD">268400</zindex>
                <url>http://www.zillow.com/local-info/MD-Catonsville/r_44490/</url>
                <latitude>39.269303</latitude>
                <longitude>-76.739626</longitude>
            </region>
        </list>
    </response>
</RegionChildren:regionchildren>
<!-- H:045  T:693ms  S:5249  R:Sun Apr 15 20:35:29 PDT 2018  B:5.0.53029.1-hotfix_ADAT-2519.69881bc~hotfix-platform-for-2018-04-11.319b04e -->
 """

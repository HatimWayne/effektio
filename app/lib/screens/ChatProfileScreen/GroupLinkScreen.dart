import 'package:effektio/common/store/themes/separatedThemes.dart';
import 'package:flutter/material.dart';

class GroupLinkScreen extends StatefulWidget {
  const GroupLinkScreen({Key? key}) : super(key: key);

  @override
  _GroupLinkScreenState createState() => _GroupLinkScreenState();
}

class _GroupLinkScreenState extends State<GroupLinkScreen> {
  bool showLink = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Group Link'),
        elevation: 0.0,
        backgroundColor: AppCommonTheme.backgroundColor,
        centerTitle: true,
      ),
      body: Column(
        children: [
          Padding(
            padding: const EdgeInsets.all(8),
            child: Card(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
              ),
              color: AppCommonTheme.darkShade,
              child: Column(
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      const Padding(
                        padding: EdgeInsets.fromLTRB(16, 8, 8, 8),
                        child: Text(
                          'Group Link',
                          style: TextStyle(color: Colors.white, fontSize: 16),
                        ),
                      ),
                      Switch(
                        value: showLink,
                        onChanged: (bool newValue) {
                          setState(() {
                            showLink = newValue;
                          });
                        },
                      )
                    ],
                  ),
                  Visibility(
                    visible: showLink,
                    child: Column(
                      children: [
                        Padding(
                          padding: const EdgeInsets.fromLTRB(8, 0, 8, 8),
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(6.33),
                            child: Container(
                              width: double.infinity,
                              decoration: const BoxDecoration(
                                border: Border(
                                  bottom: BorderSide(
                                    color: AppCommonTheme.dividerColor,
                                    width: 1,
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                        const Padding(
                          padding: EdgeInsets.all(16),
                          child: Text(
                            'https://effektio/chat/group/#erifdjknsdjhndlsnGdhsuSsyUJKHSiojsjSHNIjsjfds{LIJHNmdjsoifkdsodjms',
                            style: TextStyle(color: Colors.white, fontSize: 16),
                          ),
                        )
                      ],
                    ),
                  )
                ],
              ),
            ),
          ),
          Visibility(
            visible: showLink,
            child: Padding(
              padding: const EdgeInsets.all(8),
              child: Card(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                color: AppCommonTheme.darkShade,
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.symmetric(
                        vertical: 12,
                        horizontal: 16,
                      ),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: const [
                          Icon(
                            Icons.ios_share,
                            color: Colors.white,
                          ),
                          Padding(
                            padding: EdgeInsets.only(left: 8),
                            child: Text(
                              'Share',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 16,
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 50, right: 8),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(6.33),
                        child: Container(
                          width: double.infinity,
                          decoration: const BoxDecoration(
                            border: Border(
                              bottom: BorderSide(
                                color: AppCommonTheme.dividerColor,
                                width: 1,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(
                        vertical: 12,
                        horizontal: 16,
                      ),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: const [
                          Icon(
                            Icons.qr_code,
                            color: Colors.white,
                          ),
                          Padding(
                            padding: EdgeInsets.only(left: 8),
                            child: Text(
                              'Scan QR Code',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 16,
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 50, right: 8),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(6.33),
                        child: Container(
                          width: double.infinity,
                          decoration: const BoxDecoration(
                            border: Border(
                              bottom: BorderSide(
                                color: AppCommonTheme.dividerColor,
                                width: 1,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(
                        vertical: 12,
                        horizontal: 16,
                      ),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: const [
                          Icon(
                            Icons.restore_outlined,
                            color: Colors.white,
                          ),
                          Padding(
                            padding: EdgeInsets.only(left: 8),
                            child: Text(
                              'Reset Link',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 16,
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}

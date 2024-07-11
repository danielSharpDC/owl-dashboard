# -*- coding: utf-8 -*-
{
    'name' : 'ACAMVie Dashboard',
    'version' : '1.0',
    'summary': 'Material Dashboard For Acamvie',
    'sequence': -1,
    'description': """Material Dashboard For Acamvie""",
    'category': 'OWL',
    'depends' : ['base', 'base_setup'],
    'data': [
        'security/ir.model.access.csv',
        'views/todo_list.xml'
    ],
    'demo': [
    ],
    'installable': True,
    'application': True,
    'assets': {
        'web.assets_backend': [
            'owl/static/src/components/*/*',
        ],
    },
}